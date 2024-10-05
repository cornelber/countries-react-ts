import { useState, useEffect } from "react";
import { Country } from "../types/Country"

export const useFilteredCountries = (countries: Country[], searchTerm: string, region: string) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        (country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.name.official.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (region === "" || country.region === region)
    );
    setFilteredCountries(filtered);
  }, [countries, searchTerm, region]);

  return filteredCountries;
};
