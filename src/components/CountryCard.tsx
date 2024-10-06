import { Link } from 'react-router-dom';
import { Country } from '../types/Country';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/countries/${country.cca2}`}>
        <Card className="h-full rounded-md shadow-card flex flex-col dark:bg-light-dark">
        <CardHeader className="relative mx-0 mt-0 h-40 rounded-t-md rounded-b-none shadow-none">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody className='p-6 pb-12 flex flex-col justify-between flex-grow'>
            <Typography variant="h5" color="blue-gray" className="font-extrabold text-lg pb-4 dark:text-white">{country.name.common}</Typography>
            <Typography color="gray" className='text-sm pb-2 dark:text-white'><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
            <Typography color="gray" className='text-sm pb-2 dark:text-white'><strong>Region:</strong> {country.region}</Typography>
            <Typography color="gray" className='text-sm dark:text-white'><strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}</Typography>
        </CardBody>
        </Card>
    </Link>
  );
};

export default CountryCard;
