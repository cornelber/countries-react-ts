import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export const useCountriesContext = () => {
    const context = useContext(CountriesContext);
    if (!context) {
      throw new Error("useCountriesContext must be used within a CountriesProvider");
    }
    return context;
};