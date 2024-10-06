import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import CountryDetail from '../components/CountryDetail';
import { useCountriesContext } from '../hooks/useCountriesContext';

const CountryDetailsPage = () => {
  const { cca2 } = useParams<{ cca2: string }>();
  const { countries, error } = useCountriesContext();

  const country = countries.find((c) => c.cca2 === cca2);

  if (!country) return <p>Country not found.</p>;

  return (
    <Layout error={error}>
        <CountryDetail country={country} />
    </Layout>
  );
};

export default CountryDetailsPage;
