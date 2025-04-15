// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IERC20 {
    function balanceOf(address guy) external view returns (uint256);
}

interface IProxyFactory {
    function proxies(address guy) external view returns (address);
}

interface ISafeManager {
    function getSafesData(
        address guy
    ) external view returns (uint256[] memory ids, address[] memory safes, bytes32[] memory collateralTypes);
    
    // Added direct getSafes function for directly owned safes
    function getSafes(
        address guy
    ) external view returns (uint256[] memory);
}

interface ISAFEEngine {
    struct SafeDeposit {
        uint256 lockedCollateral;
        uint256 generatedDebt;
    }

    function safes(bytes32 collateralType, address safe) external view returns (SafeDeposit memory _safe);
    function tokenCollateral(bytes32 collateralType, address safe) external view returns (uint256 collateralBalance);
}

contract VirtualUserSafes {
    struct SafeData {
        address addy;
        uint256 id;
        uint256 lockedCollateral;
        uint256 freeCollateral;
        uint256 generatedDebt;
        bytes32 collateralType;
    }
    
    // Store contract references to avoid passing them around
    IERC20 private immutable coin;
    IProxyFactory private immutable proxyFactory;
    ISAFEEngine private immutable safeEngine;
    ISafeManager private immutable safeManager;
    
    constructor(
        IERC20 _coin,
        IProxyFactory _proxyFactory,
        ISAFEEngine _safeEngine,
        ISafeManager _safeManager,
        address user
    ) {
        // Store references to contracts
        coin = _coin;
        proxyFactory = _proxyFactory;
        safeEngine = _safeEngine;
        safeManager = _safeManager;
        
        // Get user data
        uint256 coinBalance = coin.balanceOf(user);
        
        // Get user safes data
        SafeData[] memory safesData = getUserSafes(user);
        
        // Encode and return data
        bytes memory data = abi.encode(coinBalance, safesData);
        
        assembly {
            let dataStart := add(data, 32) // abi.encode adds an additional offset
            return(dataStart, sub(msize(), dataStart))
        }
    }
    
    // Get safe data for a specific safe
    function getSafeDetails(
        bytes32 collateralType,
        address safeHandler,
        uint256 safeId
    ) private view returns (SafeData memory) {
        ISAFEEngine.SafeDeposit memory safeData = safeEngine.safes(collateralType, safeHandler);
        uint256 freeCollateral = safeEngine.tokenCollateral(collateralType, safeHandler);
        
        return SafeData(
            safeHandler,
            safeId,
            safeData.lockedCollateral,
            freeCollateral,
            safeData.generatedDebt,
            collateralType
        );
    }
    
    // Process directly owned safes
    function processDirectSafes(address user, uint256[] memory directSafeIds) private view returns (SafeData[] memory) {
        uint256 count = directSafeIds.length;
        SafeData[] memory result = new SafeData[](count);
        
        for (uint256 i = 0; i < count; i++) {
            uint256 safeId = directSafeIds[i];
            // For directly owned safes, we use default handler (the user) and collateral type (PBJO)
            bytes32 collateralType = bytes32("PBJO"); 
            
            ISAFEEngine.SafeDeposit memory safeData = safeEngine.safes(collateralType, user);
            uint256 freeCollateral = safeEngine.tokenCollateral(collateralType, user);
            
            result[i] = SafeData(
                user,
                safeId,
                safeData.lockedCollateral,
                freeCollateral,
                safeData.generatedDebt,
                collateralType
            );
        }
        
        return result;
    }
    
    // Process proxy-owned safes
    function processProxySafes(
        uint256[] memory ids, 
        address[] memory handlers, 
        bytes32[] memory types
    ) private view returns (SafeData[] memory) {
        uint256 count = ids.length;
        SafeData[] memory result = new SafeData[](count);
        
        for (uint256 i = 0; i < count; i++) {
            ISAFEEngine.SafeDeposit memory safeData = safeEngine.safes(types[i], handlers[i]);
            uint256 freeCollateral = safeEngine.tokenCollateral(types[i], handlers[i]);
            
            result[i] = SafeData(
                handlers[i],
                ids[i],
                safeData.lockedCollateral,
                freeCollateral,
                safeData.generatedDebt,
                types[i]
            );
        }
        
        return result;
    }
    
    // Get all user safes (both direct and proxy-owned)
    function getUserSafes(address user) private view returns (SafeData[] memory) {
        // Get user proxy
        address userProxy = proxyFactory.proxies(user);
        
        // Get directly owned safes
        uint256[] memory directSafeIds = safeManager.getSafes(user);
        uint256 directSafesCount = directSafeIds.length;
        
        // Get proxy-owned safes
        uint256 proxySafesCount = 0;
        uint256[] memory proxySafeIds;
        address[] memory proxySafeHandlers;
        bytes32[] memory proxyCollateralTypes;
        
        if (userProxy != address(0)) {
            (proxySafeIds, proxySafeHandlers, proxyCollateralTypes) = safeManager.getSafesData(userProxy);
            proxySafesCount = proxySafeIds.length;
        }
        
        // Process directly owned safes
        SafeData[] memory directSafes = new SafeData[](0);
        if (directSafesCount > 0) {
            directSafes = processDirectSafes(user, directSafeIds);
        }
        
        // Process proxy-owned safes
        SafeData[] memory proxySafes = new SafeData[](0);
        if (proxySafesCount > 0) {
            proxySafes = processProxySafes(proxySafeIds, proxySafeHandlers, proxyCollateralTypes);
        }
        
        // Combine results
        uint256 totalSafes = directSafesCount + proxySafesCount;
        SafeData[] memory allSafes = new SafeData[](totalSafes);
        
        // Copy direct safes
        for (uint256 i = 0; i < directSafesCount; i++) {
            allSafes[i] = directSafes[i];
        }
        
        // Copy proxy safes
        for (uint256 i = 0; i < proxySafesCount; i++) {
            allSafes[directSafesCount + i] = proxySafes[i];
        }
        
        return allSafes;
    }
}
