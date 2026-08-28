import type { GenericPokemon, PokemonType } from "@/types/pokemon.types";
import { calculateTypeEffectiveness } from "./calculateTypeEffectiveness";

const STANDARD_CRIT_MULTIPLIER: number = 1.5;

export function calculateDamage(base_damage: number, attack_type: PokemonType, is_crit: boolean, attacker: GenericPokemon, target: GenericPokemon): number {
    // Calculate damage before any multipliers
    const level_component: number = (((attacker.level * 2) / 5) + 2) / 50;
    const attacker_power: number = attacker.stats.attack;
    const target_defence: number = target.stats.defence;

    let final_damage: number = (level_component * base_damage * (attacker_power / target_defence)) + 2;

    // Check type-advantage multipliers
    const type_multiplier: number = calculateTypeEffectiveness(attack_type, target.primary_type, target.secondary_type);
    final_damage *= type_multiplier;

    // Check critical-hit multiplier
    final_damage *= is_crit ? STANDARD_CRIT_MULTIPLIER : 1;

    // Check STAB multiplier
    final_damage *= (attacker.primary_type === attack_type || attacker.secondary_type === attack_type) ? 1.5 : 1;

    return final_damage;
}