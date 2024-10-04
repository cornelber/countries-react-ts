import { Link } from 'react-router-dom';
import { Country } from '../types/Country';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={country.cca2}>
        <Card className="h-80 rounded-md shadow-card">
        <CardHeader className="relative mx-0 mt-0 rounded-t-md rounded-b-none shadow-none">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-40 object-cover" />
        </CardHeader>
        <CardBody className='p-6'>
            <Typography variant="h5" color="blue-gray">{country.name.common}</Typography>
            <Typography color="gray">Population: {country.population}</Typography>
            <Typography color="gray">Capital: {country.capital?.join(", ") || "N/A"}</Typography>
        </CardBody>
        </Card>
    </Link>
  );
};

export default CountryCard;
