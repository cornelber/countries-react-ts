// pentru o functionalitate mai optimizata fara apeluri de retea redundante
// preluam si gestionam datele despre tari intr-un singur loc
// si le pastram in context pentru a putea fi accesate de oricare componenta
import React, { createContext } from "react";
import { Country } from "../types/Country";
import { useFetchData } from "../hooks/useFetchData";
import { COUNTRIES_API_URL } from "../api/countriesApi";

// definim tipul datelor pentru context
interface CountriesContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
}

interface CountriesProviderType {
    children: React.ReactNode;
}

// initializam contextul cu tipul datelor definite & undefined
export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

export const CountriesProvider = ({children} : CountriesProviderType) => {
    // Folosim `useFetchData` pentru a prelua datele o singură dată
    const {data: countries = [], loading, error} = useFetchData<Country[]>(COUNTRIES_API_URL);

    return (
        <CountriesContext.Provider value={{ countries, loading, error}}>
               {children}
        </CountriesContext.Provider>
    )

}