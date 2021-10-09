import styles from '../styles/starlit-epiphany.module.scss'
import {useState, useEffect} from 'react'


export default function CardModal( {set,cardCode, mousePos}) {
  
  set=set.toLowerCase()
  console.log(mousePos.y+window.document.documentElement.scrollTop)
  let boxY = mousePos.y+window.document.documentElement.scrollTop
  
  // console.log(mousePos.y)
  const modalStyle = {
    position: "absolute",  
    width: "300px",
    top: boxY,
    left: mousePos.x
  }
  
    return (
            <div style={modalStyle}>
              <img src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>
            </div>
            // </div>
        )

    
}