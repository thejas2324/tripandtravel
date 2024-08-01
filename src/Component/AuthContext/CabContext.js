import React, { createContext, useContext, useState, useEffect } from "react";

const CabContext = createContext();

export const useCab = () => {
  return useContext(CabContext);
};

export const CabProvider = ({ children }) => {
  const [tripInfo, settripInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const loadtripInfo = async () => {
      try {
        const tripInfoJson = localStorage.getItem("tripInfo");
        if (tripInfoJson) {
          settripInfo(JSON.parse(tripInfoJson));
        }
        setLoading(false); // Set loading to false after fetching tripInfo data
      } catch (error) {
        console.error("Error loading tripInfo:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    loadtripInfo();
  }, []);

  const cabServices = async (tripInfoData) => {
    try {
      settripInfo(tripInfoData);
      localStorage.setItem("tripInfo", JSON.stringify(tripInfoData));
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const contextValue = {
    tripInfo,
    loading,
    cabServices,
  };

  return (
    <CabContext.Provider value={contextValue}>{children}</CabContext.Provider>
  );
};
