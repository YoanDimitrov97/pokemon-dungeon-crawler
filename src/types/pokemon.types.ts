export enum EXP_ENUM {
    slow = 0.65,
    normal = 1,
    fast = 1.2
}

export type PokemonType =
    | "normal" | "fire" | "water" | "grass" | "electric"
    | "ice" | "fighting" | "poison" | "ground" | "flying"
    | "psychic" | "bug" | "rock" | "ghost" | "dragon"
    | "steel" | "dark" | "fairy";

export interface BaseStats {
    hp: number;
    attack: number;
    defence: number;
}

export interface CurrentStats {
    hp: number;
    overshield?: number;
}

export interface BattleMoves {
    aa_damage: number;
    aa_cooldown: number;
    special_move_id: string;
    special_move_cooldown: number;
}

export interface GenericPokemon {
    id: number;
    name: string;

    level: number;
    cost:number | null;

    sprite_url: string;

    base_stats: BaseStats;
    current_stats: CurrentStats;
    moves: BattleMoves;


    primary_type: PokemonType;
    secondary_type?: PokemonType | null;

    is_mega: boolean;
    is_dynamax: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    is_special: boolean;
    is_shiny: boolean;

    exp_group: EXP_ENUM;
}

export interface PlayerPokemon extends GenericPokemon {
    current_exp: number;
    held_item: string | null;
}

export interface EnemyPokemon extends GenericPokemon {
    //false if explicitly uncatchable
    catch_rate: number | false;

    is_boss: boolean;
    is_alpha: boolean;

    drop_gold_amount: number;
}