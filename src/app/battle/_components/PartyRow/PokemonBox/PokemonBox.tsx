import { PlayerPokemon } from "@/types/pokemon.types";
import styles from "./PokemonBox.module.css"
import Image from "next/image";
import { useState } from "react";

const HP_BAR_SEGMENTS = 4;

export default function PokemonBox({pokemon}: {pokemon: PlayerPokemon}){
    const [currentHp, setCurrentHp] = useState<number>(pokemon.current_stats.hp);

    const hpRatio = Math.max(0, Math.min(1, (currentHp / pokemon.base_stats.hp)));
    const segments = Math.ceil(hpRatio * HP_BAR_SEGMENTS);

    return(
        <div className={styles.pokemonBox}>
            <div className={styles.pokemonSprite}>
                <Image
                    src={pokemon.sprite_url}
                    alt={pokemon.name}
                    width={52}
                    height={52}
                />
            </div>

            <div className={styles.hpContainer}>

                {
                    Array.from({ length: HP_BAR_SEGMENTS }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.hpSegment} ${
                                i < segments ? styles.hpSegmentFilled : styles.hpSegmentEmpty
                            }`}
                        />
                    ))
                }
            </div>
        </div>
    );
}