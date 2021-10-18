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
import CardModal from '../components/cardModal'

export async function getStaticProps() {
   
    return {
      props: {
        data1, data2, data3, data4, data5
      }
    }
  }

export default function StarlitEpiphany({data1, data2, data3, data4, data5}) {
    const [deck, setDeck] = useState([])
    const [cardArray, setCardArray] = useState([])
    const [regions,setRegions] = useState({regions:[]})
    let [cost,setCost] = useState({cost:21})
    const [type,setType] = useState("")
    const [deckArray, setDeckArray] = useState([])
    const [hover, setHover] = useState(false)
    const [modalCardSet, setModalCardSet] = useState("")
    const [modalCardCode, setModalCardCode] = useState("")
    const [modalMousePos, setModalMousePos] = useState({x:0,y:0})

    const cardArrayMaker = (array) => {
        const sortedData = array.sort((a,b)=>{
            return (a.cost-b.cost)
        })
        
        const deckData = sortedData.map(card=>{
            let {name, set, region, regions, spellSpeed,subtype, subtypes, cost, cardCode, count} = card
            set = set.toLowerCase()
            // need modal for mouseover on card
            return <Card 
                    name={name} 
                    count={count}
                    set={set} 
                    region={region} 
                    regions={regions} 
                    spellSpeed={spellSpeed} 
                    subtype={subtype} 
                    cost={cost} 
                    cardCode={cardCode} 
                    key={cardCode}
                    cardModalMaker={cardModalMaker}
                    hover={hover}
                    setHover={setHover}
                    setModalMousePos={setModalMousePos}
                />
             
        })
        return deckData
    }

    const cardModalMaker = (e,set,cardCode, mousePos) => {
        let card =  lorHashTable[`${cardCode}`]
        setModalCardCode(card.cardCode)
        setModalCardSet(card.set)
  }

    // const resetDangerDeck = () => {
    //     let initialData = lorDangerArray.map(code=>{
    //         return lorHashTable[`${code}`]
    //     })

    //     let initialArray = cardArrayMaker(initialData)
    //     setCost({cost: 15})
    //     setRegions({regions:[]})
    //     setType("")
    //     setCardArray(initialArray)
    
    // }

    const createDangerDeckArray = () => {

        let initialData = lorDangerArray.map(code=>{
            return lorHashTable[`${code}`]
        })

        let costFilteredData = initialData.filter(card=>card.cost<=cost.cost)
        // console.log(costFilteredData)
        // for each region, filter the cards if they're included... 
        // console.log(regions)
        let regionFilteredData = []

        if (regions.regions.length != 0) {
            // console.log("WE GOT REGIONS HERE!")
           
            costFilteredData.filter(card=>{
                regions.regions.forEach(region=>{
                    card.regions.forEach(regionItem=>{
                        regionItem==region?regionFilteredData.push(card):null
                    })
                    
                })
            })
            
        }
        else {
            regionFilteredData = costFilteredData
            // console.log("No regions found.")
        }
        
        
        let filteredCards = cardArrayMaker(regionFilteredData)

        setCardArray(filteredCards)
    }
 
    // set the initial column from the danger cards
    useEffect(()=>{
        document.title="Starlit Epiphany"
        createDangerDeckArray()
        // resetDangerDeck()
    },[cost,regions])


    let dataArray = lorDangerArray.map(code=> {
        return lorHashTable[`${code}`]
    })

    const handleDeckCode = (deckData) => {
        // console.log(deckData)
        // deckData has the count
        // deckData[0].count == ${an integer}
        let hashedDeckArray = deckData.map(card=>{
            let hashedCard = lorHashTable[`${card.code}`]
            let newCard = {...hashedCard,count:card.count}
            return newCard
        })
        let deckCardArray = cardArrayMaker(hashedDeckArray)
 
        setDeckArray(deckCardArray)
    }

    const listRegionsFilter = () => {
        // console.log("I'm a region!")
    }
    const listTypeFilter = () => {
        // console.log(`You clicked ${type}`)
    }

    return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1>Starlit Epiphany</h1>
        </div>

        <div className={styles.columnGrid}>
            <FilterColumn 
                handleDeckCode={handleDeckCode} 
                setCost={setCost}
                setType={setType}
                setRegions={setRegions}
                regions={regions}
                // listCostFilter={listCostFilter}
                listRegionsFilter={listRegionsFilter}
                listTypeFilter={listTypeFilter}
                cost={cost}
                type={type}
            />

            <div className={(deckArray.length>0)?styles.cardColumns2:styles.cardColumns1}>

                <div className={styles.dangerCardColumn}>
                    {cardArray}
                </div>

                <div className={styles.deckCardColumn}>
                    {deckArray}
                </div>                
            
            </div>    
            
            
        </div>
        {/* Modal Position*/}
        {hover?
            <CardModal 
                set={modalCardSet} 
                cardCode={modalCardCode} 
                modalMousePos={modalMousePos}
                />:
            null
        }
        {/* <div className={styles.costTest}>{cost.cost}</div> */}
    </div>
    )
  }