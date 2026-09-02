import { EnemyPokemon, PokemonType } from "@/types/pokemon.types";
import styles from "./EnemyDisplay.module.css";
import Image from "next/image";
import { typeColorMap } from "@/pokemon/typeColorMap";



export default function EnemyDisplay({ enemy }: { enemy: EnemyPokemon }) {
    return (
        <div className={styles.enemyContainer}>

            <div className={styles.enemySprite}>
                <Image
                    src={enemy.sprite_url}
                    alt={enemy.name}
                    width={96}
                    height={96}
                />
            </div>

            <div className={styles.enemyName}>
                <span className={styles.enemyNameSpan}>{enemy.name}</span>
            </div>

            <div className={styles.enemyLevel}>
                <span className={styles.enemyLevelSpan}>Lv. {enemy.level}</span>
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

            <div className={styles.enemyHealth}>
                <span className={styles.enemyHealthSpan}>HP: 100/100</span>
            </div>

        </div>
    );
}