import { Geb } from '../geb';
import { TokenData } from '../contracts/addresses';
export interface TokenFetchData {
    balanceE18: string;
    decimals: string;
}
export declare function fetchTokenData(geb: Geb, user: string, tokens: {
    [token: string]: TokenData;
}): Promise<{
    [token: string]: TokenFetchData;
}>;
