import { createContext, ReactElement, useEffect, useState } from "react";
import { JWTContextType } from "../types/auth";
import axios from "../utils/axios";

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: ReactElement }) => {
  const [news, setNews] = useState<any[]>([]);
  const [covidData, setCovidData] = useState<any[]>([]);
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const SetPassword = async (data: any) => {
    const response = await axios.post("account/set-password", data);
    return response.data;
  };

  // Fetch News Data
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c08fa8912af74feabf707738ef76068e`
      );
      setNews(response.data.articles);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  // Fetch COVID-19 Data
  const fetchCovidData = async () => {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
      );
      const rawData = response.data;

      // Convert object to array
      const formattedData = Object.keys(rawData.cases).map((date) => ({
        date,
        cases: rawData.cases[date],
        deaths: rawData.deaths[date],
        recovered: rawData.recovered[date],
      }));

      setCovidData(formattedData);
    } catch (err) {
      setError("Failed to fetch COVID-19 data");
    }
  };

  // Fetch Cryptocurrency Data
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      setCryptoData(response.data);
    } catch (err) {
      setError("Failed to fetch crypto data");
    }
  };

  useEffect(() => {
    fetchNews();
    fetchCovidData();
    fetchCryptoData();
  }, []);

  return (
    <JWTContext.Provider
      value={{
        SetPassword,
        news,
        covidData,
        cryptoData,
        loading,
        error,
        fetchNews,
        fetchCovidData,
        fetchCryptoData,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
