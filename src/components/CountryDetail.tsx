import { Country } from "../types/Country";

interface CountryDetailProps {
    country: Country;
}

const CountryDetail = ({country} : CountryDetailProps) => {
  return (
    <>
      <h1>{country?.name.common}</h1>
      <p>Official Name: {country?.name.official}</p>
      <p>Region: {country?.region}</p>
      <p>Subregion: {country?.subregion}</p>
      <p>Population: {country?.population}</p>
      <p>Capital: {country?.capital?.join(", ") || "N/A"}</p>
      <img
        src={country?.flags.svg}
        alt={`${country?.name.common} flag`}
        width="100"
      />
    </>
  );
};

export default CountryDetail;
