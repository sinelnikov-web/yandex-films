import {Film} from "@/entities/Film";

export function getUniqueGenres(films: Film[]) {
    return [...new Set(films.map(({genre}) => genre)).values()].map((genre) => ({id: genre, label: genre}));
}