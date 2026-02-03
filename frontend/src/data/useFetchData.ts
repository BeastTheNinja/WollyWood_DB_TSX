import { useEffect, useState } from "react";

/**
 * Custom hook for fetching data from an API
 * @template T - The type of data being fetched
 * @param url - The API endpoint to fetch data from
 * @returns Object containing data array, loading state, and error message
 */
export const useFetchData = <T,>(url: string) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};
