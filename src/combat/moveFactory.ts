import type { MoveFunction, MoveInput, MoveResult } from "@/types/combat.types";
import { calculateDamage } from "./calculateDamage";

const DEFAULT_CRIT_CHANCE = 0.05;

export function moveFactory(data: MoveInput): MoveFunction {
    return (attacker, target): MoveResult => {
        const crit_chance: number = data.crit_chance ?? DEFAULT_CRIT_CHANCE;
        const is_crit: boolean = Math.random() <= crit_chance;
        const message: string = `${attacker.name} used ${data.name}!`;

        const final_damage: number = calculateDamage(
            data.base_damage,
            data.type,
            is_crit,
            attacker,
            target
        );

        return {
            damage: final_damage,
            is_crit,
            message
        };
    };
}