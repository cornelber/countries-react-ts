import { Button, Chip, Typography } from "@material-tailwind/react";
import { Country } from "../types/Country";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface CountryDetailProps {
  country: Country;
}

const CountryDetail = ({ country }: CountryDetailProps) => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

  return (
    <>
        <Button className="flex items-center gap-2 shadow-none dark:shadow-sm border-[1px] border-dark-white bg-dark-white dark:border-dark dark:bg-light-dark hover:shadow-none hover:border-dark dark:hover:border-dark-white" onClick={navigateBack}>
            <ArrowLeftIcon className="w-3 h-3 text-dark dark:text-white" />
            <Typography 
                className="text-dark dark:text-white text-sm capitalize"
            >
                Back
            </Typography>
        </Button>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-16 ">
        <div className="flex justify-center lg:justify-start">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="dark:text-white">
          <Typography variant="h3" className="font-bold mb-6">
            {country.name.common}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div>
              <Typography className="font-medium">
                <strong>Native Name:</strong>
                <span className="font-normal ml-2">
                  {country.name.nativeName?.[
                    Object.keys(country.name.nativeName)[0]
                  ]?.common || "N/A"}
                </span>
              </Typography>
              <Typography className="font-medium">
                <strong>Population:</strong>
                <span className="font-normal ml-2">
                  {country.population.toLocaleString()}
                </span>
              </Typography>
              <Typography className="font-medium">
                <strong>Region:</strong>
                <span className="font-normal ml-2">{country.region}</span>
              </Typography>
              <Typography className="font-medium">
                <strong>Sub Region:</strong>
                <span className="font-normal ml-2">
                  {country.subregion || "N/A"}
                </span>
              </Typography>
              <Typography className="font-medium">
                <strong>Capital:</strong>
                <span className="font-normal ml-2">
                  {country.capital?.[0] || "N/A"}
                </span>
              </Typography>
            </div>

            <div>
              <Typography className="font-medium">
                <strong>Top Level Domain:</strong>
                <span className="font-normal ml-2">{country.tld?.[0] || "N/A"}</span>
              </Typography>
              <Typography className="font-medium">
                <strong>Currencies:</strong>
                <span className="font-normal ml-2">
                  {Object.values(country.currencies || {})
                    .map((c) => c.name)
                    .join(", ") || "N/A"}
                </span>
              </Typography>
              <Typography className="font-medium">
                <strong>Languages:</strong>
                <span className="font-normal ml-2">
                  {Object.values(country.languages || {}).join(", ") || "N/A"}
                </span>
              </Typography>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap">
            <Typography className="font-medium mr-2">
              <strong>Border Countries:</strong>
            </Typography>
            <div className="flex flex-wrap gap-2">
              {country.borders?.length ? (
                country.borders.map((border) => (
                  <Chip
                    key={border}
                    value={border}
                    className="bg-gray-200 text-gray-700 dark:bg-light-dark dark:text-white font-normal duration-200"
                  />
                ))
              ) : (
                <Typography>N/A</Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
