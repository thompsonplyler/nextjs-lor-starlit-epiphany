# To-Do for Starlit Epiphany
This list will include features the app needs to be functional as well as necessary revisions to account for corners cut / refactoring skipped/ best practices ignored in the name of reaching an MVP. 

## Features
* Left Column (Region Column)
    * Region Listing | Nothing else in wireframe
* Center Column(s) (Card Columns)
    * Initially list of danger cards. 
        * List will swappable between proper cards and 220px*40px (Mobalytics style) cards. 
            * Photoshop: Mobalytics style 220*40px focus sections.
                * Extract from Mobalytics?
            * CSS blended overlay filter with images. 
        * Default to two-column when deck is loaded.
        * Can also swap list for deck functionality vs. generic danger functionality. 
* Right Column (Mana/Filter Column)
    * Top is a listing of mana from 0-10+ with a reset button (12 gems)
        * Reset button might be animated. 
* Holding left-mouse results in radial around mouse with contextual results. 
* Eventually lighting from the background. For the time being, radial changing colors and subtly flashing. 
    * Charge over region column to zap/reset the regions. 
    * In danger cards, hold to zap a card from the list.
        * metrics: how many times was a given danger card removed from the list?
        * metrics: how many times was a deck card removed from the list? 
        * metrics: how often are danger cards used in decks that are entered?        
    * In deck mode, zap a card from the list-- and remove its values from play.
    * Hold and drag to reset the page and clear deck. 
    * Hold and drag elsewhere to hold and reset just the deck. 
    * Hold and drag elsewhere to reset danger card preferences.
* ThreeJS northern lights shader - Starlit Epiphany
* Toggle outer-glow (colored shadows or blurred strokes) for different speeds.

* Hypergeometric calculator against inputted deck values when there is a deck loaded. 
* Deck loader, set and reset. Location unclear. Right column? 

## Mobalytics Reference Image
![](https://i.imgur.com/yPFo7lr.png)


## LAST UPDATES 2021 10 08 @ 1213
* **UNRESOLVED** - Address the misuse of style modules.
    * Style modules are intended to keep styles as locally scoped as possible. Attaching all card, etc. styles to the Starlit Epiphany app as a whole is a misuse of CSS modules tool.
* How to programattically assign the focal point of an image in NextJS.
    * **Update** This is probably impossible, but the tool to implement manually is a combination of transform-origin and scale/position per card.
* ~~How to traverse the json files depending on the card code. Probably need a massive key~~ Solved. cf. /hashTableMaker
* ~~How to develop said file w/ massive key based on existing data. Typing it per card is obviously impractical and betrays low skill.~~ Solved. cf. /hashTableMaker
* ~~Either solve image scaling in image/next or drop NextJS image optimization entirely. Sad to see it go, but current images are unusable.~~ Removed NextJS Image component for now.
    * Need to optimize images for different connections and speeds once functionality is implemented. 
* ~~Mouse-over modal for cards.~~ Complete.
* ~~use window.document.documentElement.scrollTop to adjust modal position based on scroll distance.~~
* ~~Flickering of modal when mousing over cards from z-fighting. Modal doesn't appear when mouse over from the left? Super weird.~~ Most issues disappeared by removing following the mouse cursor, which was odd functionality anyway. 
* **MODAL STUFF** Need to preload images w/ card back as per Mobalytics mouse-over. Due to formatting weirdness, can't use stupid ```<Image/>``` component from Next.

