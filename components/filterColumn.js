import styles from '../styles/filter.module.scss'
import Image from 'next/image'
import DeckInput from './deckInput'
import {useState, useEffect} from 'react'

export default function FilterColumn({
    handleDeckCode, 
    setCost, 
    setRegions,
    setType, 
    listRegionsFilter,
    listTypeFilter,
    cost,
    type,
    regions
}) {

    
    const handleCostSet = (e,i)=> {
        const clickedCost = i
        setCost({cost: clickedCost})
    }

    const handleRegionSet = (e) =>{
        const clickedRegion = e.target.name
        regionHandler(clickedRegion)
    }

    const regionChecker = (clicked)=>{
        console.log("\nStart of region handler:\n--------\n regions state is currently: ", regions)
       
        let oldRegionsArray = regions.regions
        let newRegionsArray = oldRegionsArray
        let done = false

        if (oldRegionsArray.length === 0){
            console.log(`No regions have been selected. Adding ${clicked}` )
            newRegionsArray.push(clicked)
            return newRegionsArray
        }

        if (oldRegionsArray.length === 1){
            console.log("There is one region selected.\n")
            let itExists = oldRegionsArray.indexOf(clicked)
            console.log("Pretty sure we're getting a value here! ",itExists)
            console.log(oldRegionsArray[itExists])
            if (oldRegionsArray[itExists] == clicked){
                console.log("\n Current region found. Removing...\n")
                newRegionsArray = []
                return newRegionsArray
            }
            else {
                console.log(`...clicked region not found. Adding ${clicked}...`)
                newRegionsArray.push(clicked)
                return newRegionsArray
            }

        }


        if (oldRegionsArray.length === 2) {
            console.log("Two regions have been selected already.\n")
            
            let itExists = oldRegionsArray.indexOf(clicked)




            if (oldRegionsArray[itExists] == clicked){
                console.log(`Removing ${clicked} from region group...`)
                newRegionsArray.splice(itExists,1)
                return newRegionsArray
            } 
            else {
                console.log("Sorry, you have already selected two regions.")
                return newRegionsArray
            }

        }

    }
    const regionHandler = (clicked) => {
        let regionsArray = regionChecker(clicked)
        setRegions({regions:regionsArray})
    }

    const handleTypeSet = (e) =>{
        const clickedType = e.target.name
        setType(clickedType)
    }
    // region list. won't change
    const regionList = [
        "Bandle City", 
        "Bilgewater",
        "Demacia",
        "Freljord",
        "Ionia",
        "Noxus",
        "Piltover & Zaun",
        "Shadow Isles",
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

    const regionMap = regionList.map(region=>{
        
        return (
            <div data-region={region} name={region} onClick={handleRegionSet}>
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
                    <div className={styles.costImageContainer} data-cost={i} onClick={(e)=>handleCostSet(e,i<13?i:25)}>
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