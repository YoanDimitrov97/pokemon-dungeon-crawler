import type { GenericPokemon } from "@/types/pokemon.types";

export type SpeciesInput = Omit<GenericPokemon, "is_mega" | "is_dynamax" | "is_legendary" | "is_mythical" | "is_special" | "is_shiny"> & Partial<Pick<GenericPokemon, "is_mega" | "is_dynamax" | "is_legendary" | "is_mythical" | "is_special" | "is_shiny">>;

export function pokemonFactory(data: SpeciesInput): GenericPokemon {
    return {
        ...data,
        is_mega: false,
        is_dynamax: false,
        is_legendary: false,
        is_mythical: false,
        is_special: false,
        is_shiny: false,
        cost:null,
        ...data
    };
}