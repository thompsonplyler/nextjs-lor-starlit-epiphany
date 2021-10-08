import styles from '../styles/starlit-epiphany.module.scss'
import {useState, useEffect} from 'react'


export default function CardModal( {set,cardCode, mousePos}) {
  let [overflow,setOverflow] = useState(false)
  set=set.toLowerCase()

  let z = 1
  
  // console.log(mousePos.y)
  window.innerHeight-mousePos.y < 449?overflow=true:overflow=false
  let styleOverflow = {
    position: "absolute",
    left: mousePos.x,
    top: mousePos.y-350,
    width: "300px",
    zIndex: z
  }

  let styleRegular = {
    position: "absolute",
    left: mousePos.x,
    top: mousePos.y,
    width: "300px",
    zIndex: z
  }

  
    // console.log(`Incoming Card Modal Data:
    // set: ${set}
    // cardCode: ${cardCode}
    // mousePos: ${JSON.stringify(mousePos)}`)
// const {set,cardCode} = modalCard
    return (
            // <div style={{hidden?zIndex:3}}>
            <div 
            style={overflow?styleOverflow:styleRegular}>
              <img style={{width: "300px"}} src={`/lorData/${set}/en_us/img/cards/${cardCode}.png`}/>
            </div>
            // </div>
        )

    
}