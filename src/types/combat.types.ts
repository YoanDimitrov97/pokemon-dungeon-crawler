import type { GenericPokemon } from "./pokemon.types";

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

