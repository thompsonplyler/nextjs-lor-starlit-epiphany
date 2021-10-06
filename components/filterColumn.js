import styles from '../styles/starlit-epiphany.module.scss'
import Image from 'next/image'

export default function FilterColumn({}) {

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

    const regionMap = regionList.map(region=>{
        return (
            <div>
                    <Image
                        priority
                        src={`/images/ui-images/${region}_LoR_Region.png`}
                        height={"100%"}
                        width={"100%"}
                    />
            </div>

    )})

    
        let costMap = []
        for (let i=0;i<15;i++){
            costMap.push(
                <div>
                    <Image
                        priority
                        src={`/images/ui-images/Empty_Mana_Art_LoR.png`}
                        height={"100%"}
                        width={"100%"}>
                            
                    </Image>
                </div>
            )
        }
    

    return (
            <div className={styles.filterColumn}>
                <div className={styles.regionContainer}>
                    {regionMap}
                </div>
                <div className={styles.costContainer}>
                    {costMap}
                </div>
            </div>
        )

    
}