import {useState, useEffect} from 'react'
import styles from '../styles/card.module.scss'


export default function Card( {
  name, 
  set, 
  region, 
  regions, 
  spellSpeed,
  subtype, 
  subtypes, 
  cost, 
  cardCode, 
  cardModalMaker, 
  hover, 
  setHover, 
  setModalCard,
  setModalMousePos
}) {


  const handleMouseEnter = (e, set, cardCode) => {
    setHover(true)
    setModalMousePos({x:e.clientX,y:e.clientY})
    cardModalMaker(e,set,cardCode)
  }

  const handleMouseLeave = () => {
    
    setHover(false)
    
  }

  const handleMouseMove = (e) => {
    setModalMousePos({x:e.pageX,y:e.pageY})  }
    console.log(cost)

    return (
            <div className={styles.cardContainer} onMouseEnter={(e)=>handleMouseEnter(e,set,cardCode)} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardDataContainer}>
                <div className={styles.cardDataCost}>{cost}</div><div className={styles.cardText}>{name}</div>
              </div>
              <img className={styles.cardImage} src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>
            </div>
        )

    
}