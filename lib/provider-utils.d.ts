import { AbiDefinition, Inputs, Outputs, TransactionRequest } from './contracts';
import { providers } from 'ethers';
export declare function ethCall(provider: providers.Provider, transaction: TransactionRequest): Promise<string>;
export declare function decodeFunctionData(data: string, abiFragment: AbiDefinition): Outputs;
export declare function encodeFunctionData(params: Inputs[], abiFragment: AbiDefinition): string;
export declare function chainId(provider: providers.Provider): Promise<number>;
export declare function extCodeHash(provider: providers.Provider, address: string): Promise<string>;
