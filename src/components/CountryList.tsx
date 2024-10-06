import { Country } from "../types/Country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
  currentPage: number;
  countriesPerPage: number;
}

const CountryList = ({ countries, currentPage, countriesPerPage }: CountryListProps) => {
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {currentCountries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
