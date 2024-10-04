import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import CountryDetail from '../components/CountryDetail';
import { useCountriesContext } from '../hooks/useCountriesContext';

//todo: navigation
//todo: error page

const CountryDetailsPage = () => {
  const { cca2 } = useParams<{ cca2: string }>();
  const { countries, loading, error } = useCountriesContext();

  const country = countries.find((c) => c.cca2 === cca2);

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>{error}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <Layout>
        <CountryDetail country={country} />
    </Layout>
  );
};

export default CountryDetailsPage;
