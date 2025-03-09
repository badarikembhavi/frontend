export type JWTContextType = {
    SetPassword: (data: any) => Promise<void>;
    news: any[];
    covidData: any[];  
    cryptoData: any[]; 
    loading: boolean;
    error: string | null;
    fetchNews: () => Promise<void>;
    fetchCovidData: () => Promise<void>; 
    fetchCryptoData: () => Promise<void>; 
}
