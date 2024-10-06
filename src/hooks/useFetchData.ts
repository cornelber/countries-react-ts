import { useEffect, useState } from "react";

export const useFetchData = <T>(apiUrl: string) => {
  const [data, setData] = useState<T>([] as unknown as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Server responded with status: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        const errorMessage = (err as Error).message || "An unknown error occurred while fetching data.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};
