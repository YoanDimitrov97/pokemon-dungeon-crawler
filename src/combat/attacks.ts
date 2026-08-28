import type { MoveFunction, MoveResult } from "@/types/combat.types";
import type { GenericPokemon, PokemonType } from "@/types/pokemon.types";
import { calculateDamage } from "./calculateDamage";

const NORMAL_CRIT_CHANCE: number = 0.05;
const HIGH_CRIT_CHANCE: number = 0.125;

export const MOVE_REGISTRY:
    Record<string, MoveFunction> = {
        //
        tackle: (attacker, target): MoveResult => {
            const move_type: PokemonType = "normal";
            const base_damage: number = 40;
            const is_crit: boolean = Math.random() <= NORMAL_CRIT_CHANCE;
            const message: string = `${attacker.name} used tackle!`;

            const final_damage: number = calculateDamage(base_damage, move_type, is_crit, attacker, target);

            return {
                damage: final_damage,
                is_crit,
                message
            }
        }

    } satisfies Record<string, MoveFunction>;