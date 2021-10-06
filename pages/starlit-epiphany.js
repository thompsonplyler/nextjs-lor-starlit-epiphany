import styles from '../styles/starlit-epiphany.module.scss'
import data1 from '../data/lorData/set1/en_us/data/set1-en_us.json'
import data2 from '../data/lorData/set2/en_us/data/set2-en_us.json'
import data3 from '../data/lorData/set3/en_us/data/set3-en_us.json'
import data4 from '../data/lorData/set4/en_us/data/set4-en_us.json'
import data5 from '../data/lorData/set5/en_us/data/set5-en_us.json'
import lorDangerCards from "../data/lorDangerCards.js"
import lorHashTable from '../data/bigData.json'
import Card from '../components/card'
import Image from 'next/image'

export async function getStaticProps() {
   
    return {
      props: {
        data1, data2, data3, data4, data5, lorDangerCards
      }
    }
  }
  
  
  // How to traverse multiple data sets... 
  // Master list of cards and their cardCode values
  // dangerList will be an array of cardCodes
  // pull data from the aggregated datasets without
  // scrubbing through a for loop. 
  
  let dangerArray = ["05BC188", "01NX053", "01SI015", "01FR030", "05BC001", "03MT084"]
  let value = dangerArray[0]
  console.log("This is from the hash table:", lorHashTable[`${value}`])

console.log("These are the lor Danger Cards:", lorDangerCards)


export default function StarlitEpiphany({data1, data2, data3, data4, data5}) {
    
    let dataArray = dangerArray.map(code=> {
        return lorHashTable[`${code}`]
    })

    console.log("This is the data array: ", dataArray)

    let processedData = dataArray.map(card=>{
        let {name, set, region, regions, spellSpeed,subtype, subtypes, cost, cardCode} = card
        set = set.toLowerCase()
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

    return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1>Starlit Epiphany</h1>
        </div>

        <div className={styles.columnGrid}>
            <div className={styles.regionColumn}>

            </div>

            <div className={styles.cardColumns}>
{
// possibly make column split below programmatic based on presence of 
// deck code entered. If there are no deck cards, there should be no deck column.
// danger cards can start in the center in the Mobalytics style. (2px x 2px squares 
// to signify number used vs/ in deck, traditionally.
}
                <div className={styles.dangerCardColumn}>
                    {processedData}
                </div>
                <div className={styles.deckCardColumn}>
                </div>                
            </div>
            
            <div className={styles.filterColumn}>
            </div>
            
        </div>

    </div>
    )
  }

