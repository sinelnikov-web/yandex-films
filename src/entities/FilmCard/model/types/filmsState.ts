
export type Film = {
    id: string;
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    rating: number;
    director: string;
    reviewIds: Array<string>;
}

export interface FilmsState {
    filmsList: Array<Film>;
}
