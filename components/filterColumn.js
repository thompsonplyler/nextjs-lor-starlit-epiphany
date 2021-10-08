import styles from '../styles/starlit-epiphany.module.scss'
import Image from 'next/image'
import DeckInput from './deckInput'

export default function FilterColumn({handleDeckCode, setCost, setRegions, setType, listRegionsFilter, listCostFilter,
    listTypeFilter,
    cost,
    type,
    regions}) {

    
    const handleCostSet = async (e,i)=> {
        let newCost = await i
        setCost(newCost)
        listCostFilter(i)
    }

    const handleRegionSet = (e,regions) =>{
        setRegions(regions)
    }

    const handleTypeSet = (e,type) =>{
        setType(type)
        console.log(type)
    }
    // region list. won't change
    const regionList = [
        "Bandle_City", 
        "Bilgewater",
        "Demacia",
        "Freljord",
        "Ionia",
        "Noxus",
        "Piltover_Zaun",
        "Shadow_Isles",
        "Shurima",
        "Targon",
    ]

    const typeList = [
        "unit",
        "landmark",
        "burst",
        "focus",
        "fast",
        "slow"
    ]

    // array to render regions
    // 2021 10 6
    // need to implement dataset to track clicks from starlit-epiphany
    const regionMap = regionList.map(region=>{
        return (
            <div data-region={region} name={region} onClick={(e,region)=>handleRegionSet(e,region)}>
                    <Image
                        priority
                        src={`/images/ui-images/${region}_LoR_Region.png`}
                        height={"100%"}
                        width={"100%"}
                        name={region}
                        alt={region}
                    />
            </div>

    )})

    
    // array to display mana costs
        let costMap = []
        for (let i=0;i<=13;i++){
            costMap.push(
                    <div className={styles.costImageContainer} data-cost={i} onClick={(e)=>handleCostSet(e,i)}>
                    <p className={styles.costText}>{i<13?i:"13+"}</p>
                    <img className={styles.costImage} src={`/images/ui-images/Empty_Mana_Art_LoR.png`}/>
                    </div>
            )
        }

        const typeMap = typeList.map(type=>{
            let srcName
            switch(type){
                case "unit":
                    srcName = "Follower_card"
                    break;
                case "landmark":
                    srcName = "Keyword_Landmark"
                    break;
                case "burst":
                    srcName = "Keyword_Burst"
                    break;
                case "focus":
                    srcName = "Keyword_Focus"
                    break;
                case "fast":
                    srcName = "Keyword_Fast"
                    break;
                case "slow":
                    srcName = "Keyword_Slow"
                    break;
            }

            return (<div data-type={type} onClick={(e)=>handleTypeSet(e,type)}>
            <Image
                priority
                src={`/images/ui-images/${srcName}.png`}
                height={"100%"}
                width={"100%"}
                name={type}
                alt={type}/>
        </div>

        )})
    
    // 2021 10 6
    // need to implement further filters for card types
    // need to design active class for state change 
    // (selected regions, mana, etc.)

    


    return (
        // all filters live here except deck entry
        <div className={styles.filterColumn}>
                {/* region section */}
                <div className={styles.regionContainer}>
                    {regionMap}
                </div>
                <hr className={styles.hrStyle}/>
                {/* cost section */}
                <div className={styles.costContainer}>
                    {costMap}
                </div>
                <hr className={styles.hrStyle}/>
                <div className={styles.typeContainer}>
                {/* type section */}
                {typeMap}
                </div>
                <DeckInput handleDeckCode={handleDeckCode}/>
            </div>
        )

    
}