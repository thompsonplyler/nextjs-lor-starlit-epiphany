import styles from '../styles/starlit-epiphany.module.scss'
import data1 from '../data/lorData/set1/en_us/data/set1-en_us.json'
import data2 from '../data/lorData/set2/en_us/data/set2-en_us.json'
import data3 from '../data/lorData/set3/en_us/data/set3-en_us.json'
import data4 from '../data/lorData/set4/en_us/data/set4-en_us.json'
import data5 from '../data/lorData/set5/en_us/data/set5-en_us.json'
import lorDangerCards from "../data/lorDangerCards.js"
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

console.log(lorDangerCards)


export default function StarlitEpiphany({data1, data2, data3, data4}) {
    let thing = 42
    let dataArray = []

    for (let i = 35; i < thing; i++){
        dataArray.push(data1[i])
    }

    console.log(dataArray)
    // console.log(data1)

    let processedData = dataArray.map(card=>{
        let name = card.name
        let cardCode = card.cardCode
        let set = card.set.toLowerCase()
        return <Card name={name} set={set} cardCode={cardCode} key={cardCode}/>
         
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

