import {useState, useEffect} from 'react'
import styles from '../styles/starlit-epiphany.module.scss'


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
  setModalMousePos,
  openModal,
  closeModal}) {


  const handleMouseEnter = (e, set, cardCode) => {
    console.log("mouse entered!")
    // console.log("event from mouse entry: ", e,"\n\n\n" )
    console.log("window from event: ",window,"\n\n\n")
    console.log("scroll stuff: ", window.document.documentElement.scrollTop)
    setHover(true)
    setModalMousePos({x:e.clientX,y:e.clientY})
    cardModalMaker(e,set,cardCode)
    openModal()
  }

  const handleMouseLeave = () => {
    // console.log ("mouse left!")
    setHover(false)
    
  }

  const handleMouseMove = (e) => {
    setModalMousePos({x:e.pageX,y:e.pageY})  }

    return (
            <div className={styles.cardContainer} onMouseEnter={(e)=>handleMouseEnter(e,set,cardCode)} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
              <p className={styles.cardText}>{name}</p>
              <img className={styles.cardImage} src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>

              {/* objectFit={"cover"}
              layout="fill" */}

            </div>
        )

    
}