import { EnemyPokemon, PokemonType } from "@/types/pokemon.types";
import styles from "./EnemyDisplay.module.css";
import Image from "next/image";
import { typeColorMap } from "@/pokemon/typeColorMap";
import { useState } from "react";


export default function EnemyDisplay({ enemy }: { enemy: EnemyPokemon }) {
    const [currentHP, setCurrentHP] = useState<number>(enemy.current_stats.hp);
    
    const handleDamage = (dmg_amount: number) => {
        setCurrentHP((prev) => Math.max(0, prev - dmg_amount));
    }

    const hpRatio = currentHP / enemy.base_stats.hp;
    const hpColor = hpRatio > 0.45 ? "#4ade80" : hpRatio > 0.15 ? "#facc15" : "#f87171";
    return (
        <div className={styles.enemyContainer}>

            <div className={styles.enemySprite}>
                <Image
                    src={enemy.sprite_url}
                    alt={enemy.name}
                    width={124}
                    height={124}
                />
            </div>

            <div className={styles.enemyNameAndLevel}>
                <span className={styles.enemyNameSpan}>{enemy.name}</span>
                <span className={styles.enemyLevelSpan}>Lv. {enemy.level}</span>
            </div>

            <div className={styles.enemyHealth}>
                <span className={styles.enemyHealthSpan}>HP: {currentHP} / {enemy.base_stats.hp}</span>
            </div>

            <div className={styles.hpBarTrack}>
                <div
                    className={styles.hpBarFill}
                    style={{ width: `${hpRatio * 100}%`, backgroundColor: hpColor }}
                />
            </div>

            <div className={styles.enemyTypes}>
                {enemy.primary_type && (
                    <span
                        className={styles.enemyTypeSpan}
                        style={{ backgroundColor: typeColorMap[enemy.primary_type] }}
                    >
                        {enemy.primary_type}
                    </span>
                )}
                {enemy.secondary_type && (
                    <span
                        className={styles.enemyTypeSpan}
                        style={{ backgroundColor: typeColorMap[enemy.secondary_type] }}
                    >
                        {enemy.secondary_type}
                    </span>
                )}
            </div>

            <button onClick={ () => handleDamage(enemy.moves.aa_damage)}>DO DAMAGE</button>

        </div>
    );
}