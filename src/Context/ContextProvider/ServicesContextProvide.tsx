import React, { memo, useState, ReactNode, createContext, useEffect } from "react";
import { apiServices } from "../../services/api.services";

interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
}

interface ServicesContextProviderProps {
  children: ReactNode;
}

export const ServiceContext = createContext<{
  allServices: Service[];
  setAllServices: React.Dispatch<React.SetStateAction<Service[]>>
}>(
  {
    allServices: [],
    setAllServices: () => { }
  }
);

const ServicesContextProvider: React.FC<ServicesContextProviderProps> = ({ children }) => {
  const [allServices, setAllServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiServices.getAllServices();
        if (Array.isArray(response?.data?.message)) {
          setAllServices(response.data?.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [])

  return (
    <ServiceContext.Provider value={{ allServices, setAllServices }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default memo(ServicesContextProvider);
