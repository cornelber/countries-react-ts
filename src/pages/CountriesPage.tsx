import { useState } from "react";
import Layout from "../layouts/Layout";
import CountryList from "../components/CountryList";
import { useCountriesContext } from "../hooks/useCountriesContext";
import CountriesPageSkeleton from "../components/skeleton/CountriesPageSkeleton";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import { useFilteredCountries } from "../hooks/useFilteredCountries";
import { usePagination } from "../hooks/usePagination";

const CountriesPage = () => {
  const { countries, loading, error } = useCountriesContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = useFilteredCountries(countries, searchTerm, region);
  const countriesPerPage = 12;

  const {
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    setCurrentPage,
  } = usePagination(filteredCountries.length, countriesPerPage);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRegionChange = (selectedRegion: string) => {
    setRegion(selectedRegion);
    setCurrentPage(1);
  };
  
  return (
    <Layout error={error} >
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
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </>
      )}
    </Layout>
  );
};

export default CountriesPage;
