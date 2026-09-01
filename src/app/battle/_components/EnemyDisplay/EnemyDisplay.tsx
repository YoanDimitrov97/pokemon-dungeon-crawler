import { EnemyPokemon } from "@/types/pokemon.types";
import styles from "./EnemyDisplay.module.css";
import Image from "next/image";



export default function EnemyDisplay({enemy}: {enemy: EnemyPokemon}){
    return(
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

            <div className={styles.enemyStatus}>
                <span className={styles.enemyStatusSpan}>Normal</span>
            </div>

            <div className={styles.enemyHealth}>
                <span className={styles.enemyHealthSpan}>HP: 100/100</span>
            </div>

        </div>
    );
}