import styles from '../styles/starlit-epiphany.module.scss'
import Image from 'next/image'

export default function Card( {name, set, region, regions, spellSpeed,subtype, subtypes, cost, cardCode}) {

    return (
            <div className={styles.cardContainer}>
              <p className={styles.cardText}>{name}</p>
              <img className={styles.cardImage} src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>

              {/* objectFit={"cover"}
              layout="fill" */}

            </div>
        )

    
}