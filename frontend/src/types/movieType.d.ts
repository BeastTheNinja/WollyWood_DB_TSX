// Movie/Poster data type
export interface Moviedata {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    sortOption?: string;      // Optional sorting option
    genres: Genre[];          // Array of associated genres
}

// Genre type with relation data
export interface Genre {
    id: number;
    title: string;
    slug: string;             // URL-friendly identifier
    poster_genre_rel: PosterGenreRel;  // Relation to poster
}

// Junction table for many-to-many relationship
export interface PosterGenreRel {
    id: number;
    poster_id: number;
    genre_id: number;
}

// Sort options for poster listing
export type SortOption = "price_asc" | "price_desc";
