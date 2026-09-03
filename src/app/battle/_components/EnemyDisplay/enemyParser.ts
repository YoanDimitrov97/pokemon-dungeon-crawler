import { EnemyPokemon, GenericPokemon } from "@/types/pokemon.types";

const DEFAULT_ENEMY_OVERRIDES = {
    catch_rate: 75,
    is_boss: false,
    is_alpha: false,
    drop_gold_amount: 100
} satisfies Omit<EnemyPokemon, keyof GenericPokemon>;

export default function toEnemy(
    pokemon: GenericPokemon,
    overrides?: Partial<Omit<EnemyPokemon, keyof GenericPokemon>>
): EnemyPokemon {
    return {
        ...pokemon,
        ...DEFAULT_ENEMY_OVERRIDES,
        ...overrides
    };
}