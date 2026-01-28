import { useEffect, useState } from "react";
import type { Moviedata } from "../types/movieType";

export const useFetchPosters = (limit: number = 2) => {
    const [posters, setPosters] = useState<Moviedata[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:3000/posters?sort_key=random&limit=${limit}&attributes=id,name,description,image`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch posters');
                }

                const data = await response.json();
                setPosters(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosters();
    }, [limit]);

    return { posters, loading, error };
};
