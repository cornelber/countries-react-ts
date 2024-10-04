import { useEffect, useState } from "react";
import { fetchCountries } from "../api/countriesApi";
import { Country } from "../types/Country";


export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCountries = async () => {
            try {
                setLoading(true);
                const data = await fetchCountries();

                setTimeout(() => {
                    setCountries(data);
                    setLoading(false);
                  }, 1000);
            } catch (err) {
                setError('Failed to fetch countries');
                console.log(err);
                setLoading(false)
            }
        }

        getCountries();
    }, []);

    return {countries, loading, error}
}