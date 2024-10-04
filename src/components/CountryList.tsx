// src/components/CountryList.tsx
import React from 'react';
import { useCountries } from '../hooks/useCountries';
import { CardSkeleton } from '../layouts/CardSkeleton';
import CountryCard from './CountryCard';

const CountryList: React.FC = () => {
  const { countries, loading, error } = useCountries();

  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-4 gap-16 gap-y-16">
      {loading ? (
        Array.from({ length: 12 }).map((_, index) => <CardSkeleton key={index} />)
      ) : (
        countries.map(country => (
          <CountryCard key={country.cca2} country={country} />
        ))
      )}
    </div>
  );
};

export default CountryList;
