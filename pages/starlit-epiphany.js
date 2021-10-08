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
    const [regions,setRegions] = useState([])
    const [cost,setCost] = useState(0)
    const [type,setType] = useState("")
    const [deckArray, setDeckArray] = useState([])
    const [hover, setHover] = useState(0)
    const [modalCardSet, setModalCardSet] = useState("")
    const [modalCardCode, setModalCardCode] = useState("")
    const [modalMousePos, setModalMousePos] = useState({x:0,y:0})

    const cardArrayMaker = (array) => {
        const sortedData = array.sort((a,b)=>{
            return (a.cost-b.cost)
        })
        
        const deckData = sortedData.map(card=>{
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

    const resetDangerDeck = () => {
        let initialData = lorDangerArray.map(code=>{
            return lorHashTable[`${code}`]
        })

        let initialArray = cardArrayMaker(initialData)
        setCost(0)
        setRegions([])
        setType("")
        setCardArray(initialArray)
    
    }
 
    // set the initial column from the danger cards
    useEffect(()=>{
        document.title="Starlit Epiphany"
        resetDangerDeck()
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

    function listCostFilter(){
        console.log("This is the cost I'm going to pass to the deck filter:\n",cost)
        console.log(cardArray[0].props)
        let newCardArray = []
        cardArray.forEach(card=>
            (card.props.cost<=cost)?newCardArray.push(card):null)
        
        console.log(newCardArray)

    }

    const listRegionsFilter = () => {
        console.log("I'm a region!")
    }
    const listTypeFilter = () => {
        console.log(`You clicked ${type}`)
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
                listCostFilter={listCostFilter}
                listRegionsFilter={listRegionsFilter}
                listTypeFilter={listTypeFilter}
                cost={cost}
                type={type}
                regions={regions}
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
        {hover?
        <CardModal set={modalCardSet} cardCode={modalCardCode} mousePos={modalMousePos}/>:null} 

    </div>
    )
  }