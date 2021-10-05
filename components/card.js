import styles from '../styles/starlit-epiphany.module.scss'
import imageParse from '../lib/imageParse'
import Image from 'next/image'

export default function Card({name, cardCode, set}) {

    return (
            <div className={styles.cardContainer}>
                <Image
              priority
              src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}
              height={40}
              width={220}
              alt={name}
            />

            </div>
        )

    
}