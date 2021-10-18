import styles from '../styles/deckInput.module.scss'
import {DeckEncoder} from 'runeterra'
import {useState} from 'react'

let deckParser = (code) => {
    let deck = DeckEncoder.decode(code)
    // console.log("I'm a deck!", deck)
    return deck
}

export default function DeckInput({handleDeckCode}){
    const [value,setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const deck = deckParser(value)
        handleDeckCode(deck)
        setValue("")
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)    
    }

    return(
        <div className={styles.deckInputContainer}>
                    
        <form className={styles.formStyle} onSubmit={handleSubmit}>
            <input placeholder={"Enter deck code"} name={"deckCodeInput"} className={styles.inputStyle} value={value} onChange={handleChange}/>
        </form>
        
    </div>

    )

}