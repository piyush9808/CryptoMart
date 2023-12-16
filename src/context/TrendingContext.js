import { createContext, useLayoutEffect, useState } from "react";

// create context object
export const TrendingContext = createContext({});

// create the provider component
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const apiKey = 'CG-ZBkX8C95yqWPsFhAcBhFqBbH	'; // Replace with your actual API key

const url = `https://api.coingecko.com/api/v3/search/trending?apiKey=${apiKey}`;

const getTrendData = async () => {
  try {
    const data = await fetch(url, {
      headers: {
        // You can add other headers if needed
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      if (res.ok) {
        return res.json();
      }
      let errorResponse = await res.json();
      console.error(errorResponse);
      throw new Error(errorResponse.error);
    }).then((json) => json);

    setTrendData(data.coins);
  } catch (error) {
    console.error(error);
  }
};


  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
        resetTrendingResult,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
