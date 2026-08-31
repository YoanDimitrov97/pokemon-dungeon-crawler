import type { GenericPokemon } from "@/types/pokemon.types";
//TODO: pokemonFactory based approach, so that we can omit typing the optional
//TODO: game-irrelevant fields
export const POKEDEX: Record<string, GenericPokemon> = {
} satisfies Record<string, GenericPokemon>;