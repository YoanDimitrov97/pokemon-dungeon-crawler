import { PlayerPokemon, GenericPokemon } from "@/types/pokemon.types";

const DEFAULT_PLAYER_POKEMON_OVERRIDES = {
    current_exp: 0,
    held_item: null
} satisfies Omit<PlayerPokemon, keyof GenericPokemon>;

export default function toPlayerPokemon(
    pokemon: GenericPokemon,
    overrides?: Partial<Omit<PlayerPokemon, keyof GenericPokemon>>
): PlayerPokemon {
    return {
        ...pokemon,
        ...DEFAULT_PLAYER_POKEMON_OVERRIDES,
        ...overrides
    };
}