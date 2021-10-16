import {useState, useEffect} from 'react'
import styles from '../styles/card.module.scss'

const alpha = .9
const regionColorKey = {
  "Bilgewater": {
    color: `rgba(113, 38, 28,${alpha} )`
  },
  "Piltover & Zaun":{
    color: `rgba(230, 179, 81,${alpha} )`
  },
  "Freljord":{
    color: `rgba(151, 210, 225,${alpha} )`
  },
  "Noxus":{
    color: `rgba(131, 32, 30,${alpha} )`
  },
  "Shurima":{
    color: `rgba(237, 208, 46,${alpha} )`
  },
  "Targon":{
    color: `rgba(57, 52, 129,${alpha} )`
  },
  "Bandle City":{
    color: `rgba(167, 190, 13,${alpha} )`
  },
  "Ionia":{
    color: `rgba(202, 118, 146,${alpha} )`
  },
  "Shadow Isles":{
    color: `rgba(7, 162, 128,${alpha} )`
  },
  "Demacia":{
    color: `rgba(196, 182, 139,${alpha} )`
  }
}


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
    const color = regionColorKey[`${region}`].color
    console.log(`The card ${name} has a region of ${region}, which uses the color, ${color}`)


    return (
            <div className={styles.cardContainer} onMouseEnter={(e)=>handleMouseEnter(e,set,cardCode)} onMouseLeave={handleMouseLeave}>
              <div style={{background: `linear-gradient(90deg, ${regionColorKey[`${region}`].color} 66%, rgba(9,9,121,0) 83%)`}}>
              <div className={styles.cardDataContainer}>
                
              <div 
                className={styles.costImageContainer}
              >
                    <p className={styles.costText}>{cost}</p>
                    <img className={styles.costImage} src={`/images/ui-images/Empty_Mana_Art_LoR.png`}/>
              </div>


                <div className={styles.cardText}>{name}</div>
              </div>
              </div>
              <img className={styles.cardImage} src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>
            </div>
        )

    
}