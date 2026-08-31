import type { GenericPokemon, PokemonType } from "./pokemon.types";

export interface MoveResult {
    damage?: number;
    is_crit?: boolean;
    healed_amount?: number;
    message: string;
}

export type MoveFunction = (
    attacker: GenericPokemon,
    target: GenericPokemon
) => MoveResult;

export interface MoveInput {
    name: string;
    base_damage: number;
    type: PokemonType;
    crit_chance?: number;
}