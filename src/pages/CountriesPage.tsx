import { useState } from "react";
import Layout from "../layouts/Layout";
import CountryList from "../components/CountryList";
import { useCountriesContext } from "../hooks/useCountriesContext";
import CountriesPageSkeleton from "../components/skeleton/CountriesPageSkeleton";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

//todo: navigation with filters and pages
const CountriesPage = () => {
  const { countries, loading, error } = useCountriesContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRegionChange = (selectedRegion: string) => {
    setRegion(selectedRegion);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < countries.length) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if(error) return <p>Error</p>;

  const filteredCountries = countries.filter(
    (country) =>
      (country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      (region === "" || country.region === region)
  );

  return (
    <Layout>
      {loading ? (
        <CountriesPageSkeleton />
      ) : (
        <>
          <FilterBar
            searchTerm={searchTerm}
            region={region}
            onSearchChange={handleSearchChange}
            onRegionChange={handleRegionChange}
          />
          <CountryList 
            countries={filteredCountries}
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
          />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={countriesPerPage}
            totalItems={filteredCountries.length}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </>
      )}
    </Layout>
  );
};

export default CountriesPage;
