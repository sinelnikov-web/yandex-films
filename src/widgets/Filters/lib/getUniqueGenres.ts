import {Film} from "@/entities/FilmCard";

export function getUniqueGenres(films: Film[]) {
    return [...new Set(films.map(({genre}) => genre))].map((genre) => ({id: genre, label: genre}));
}