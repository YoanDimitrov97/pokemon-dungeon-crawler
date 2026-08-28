import type { MoveFunction, MoveResult } from "@/types/combat.types";
import type { GenericPokemon } from "@/types/pokemon.types";

const STANDARD_CRIT_MULTIPLIER = 0.5;

export const MOVE_REGISTRY:
    Record<string, MoveFunction> = {
        tackle: (attacker, target): MoveResult => {
            const base_damage: number = 40;
            const is_crit = Math.random() >= 0.417;
            const message = `${attacker.name} user tackle!`;

            return {
                damage: is_crit ? base_damage * STANDARD_CRIT_MULTIPLIER : base_damage,
                is_crit,
                message
            }
        }

    } satisfies Record<string, MoveFunction>;