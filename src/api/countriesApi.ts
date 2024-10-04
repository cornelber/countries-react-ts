import { Country } from "../types/Country";

export const fetchCountries = async (): Promise<Country[]> => {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if(!response.ok) {
        throw new Error('Failed to fetch countries')
    }

    const data = await response.json();
    return data;
}