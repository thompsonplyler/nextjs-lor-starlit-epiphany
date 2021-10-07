// library imports
import {useState, useEffect} from 'react'

// styles
import styles from '../styles/starlit-epiphany.module.scss'

//data
import data1 from '../data/lorData/set1/en_us/data/set1-en_us.json'
import data2 from '../data/lorData/set2/en_us/data/set2-en_us.json'
import data3 from '../data/lorData/set3/en_us/data/set3-en_us.json'
import data4 from '../data/lorData/set4/en_us/data/set4-en_us.json'
import data5 from '../data/lorData/set5/en_us/data/set5-en_us.json'
import lorHashTable from '../data/bigData.json'
import lorDangerArray from '../data/dangerCards'

// components 
import Card from '../components/card'
import FilterColumn from '../components/filterColumn'

export async function getStaticProps() {
   
    return {
      props: {
        data1, data2, data3, data4, data5
      }
    }
  }

const cardArrayMaker = (array) => {
    const deckData = array.map(card=>{
        let {name, set, region, regions, spellSpeed,subtype, subtypes, cost, cardCode} = card
        set = set.toLowerCase()
        // need modal for mouseover on card
        return <Card 
                name={name} 
                set={set} 
                region={region} 
                regions={regions} 
                spellSpeed={spellSpeed} 
                subtype={subtype} 
                cost={cost} 
                cardCode={cardCode} 
                key={cardCode}
            />
         
    })
    return deckData
}

export default function StarlitEpiphany({data1, data2, data3, data4, data5}) {
    const [deck, setDeck] = useState([])
    const [cardArray, setCardArray] = useState([])
    const [regions,setRegions] = useState([])
    const [cost,setCost] = useState(0)
    const [type,setType] = useState("")
    const [deckArray, setDeckArray] = useState([])
 
    // set the initial column from the danger cards
    useEffect(()=>{
        document.title="Starlit Epiphany"
        
        let initialData = lorDangerArray.map(code=>{
            return lorHashTable[`${code}`]
        })

        let initialArray = cardArrayMaker(initialData)
        console.log(initialArray)
        setCardArray(initialArray)

    },[])

    
    let dataArray = lorDangerArray.map(code=> {
        return lorHashTable[`${code}`]
    })

    const handleDeckCode = (deckData) => {
        console.log(deckData)
        let hashedDeckArray = deckData.map(card=>{
            return lorHashTable[`${card.code}`]
    
        })
        let deck = cardArrayMaker(hashedDeckArray)
        setDeckArray(deck)
    }

    return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1>Starlit Epiphany</h1>
        </div>

        <div className={styles.columnGrid}>
        <FilterColumn handleDeckCode={handleDeckCode} />

            <div className={(deckArray.length>0)?styles.cardColumns2:styles.cardColumns1}>
{
// make column split below programmatic based on presence of 
// deck code entered - cardColumn 1 or 2. 
// If there are no deck cards, there should be no deck column. (cardColumn1)
// danger cards can start in the center in the Mobalytics style. (2px x 2px squares) 
// to signify number used vs/ in deck, traditionally.
}
                <div className={styles.dangerCardColumn}>
                    {cardArray}
                </div>

                <div className={styles.deckCardColumn}>
                    {deckArray}
                </div>                
            
        </div>    
            
            
        </div>

    </div>
    )
  }