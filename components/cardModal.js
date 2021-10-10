import styles from '../styles/starlit-epiphany.module.scss'
import {useState, useEffect} from 'react'


export default  function CardModal( {set,cardCode, modalMousePos}) {
  const [imageSrc, setImageSource] = useState("")
  
  set=set.toLowerCase()
  let boxY = modalMousePos.y+window.document.documentElement.scrollTop
  
  useEffect( ()=>{
    setImageSource(`/lorData/${set}/en_us/img/cards/${cardCode}.png`)
  },[imageSrc])
  // console.log(modalMousePos.y)
  const modalStyle = {
    position: "absolute",  
    width: "300px",
    top: boxY,
    left: modalMousePos.x,
    zIndex: 3
  }
  
  // placeholder lazy loading needed-- cf. how it's done in Mobalytics
    return (
            <div style={modalStyle}>
              <img src={`${imageSrc}`}/>
            </div>
            // </div>
        )

    
}