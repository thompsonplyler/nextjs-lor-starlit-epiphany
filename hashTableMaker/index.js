import fs from "fs";
import http from 'http';

let numberOfSets = 5

for (let i = 1; i < numberOfSets+1; i++){

fs.readFile(`../data/lorData/set${i}/en_us/data/set${i}-en_us.json`, (err,data)=>{
    console.log (`-----

    Parsing set ${i}
    
-----
`)

let hashObject = JSON.parse(data)
// console.log(hashObject[32].name)
const objectSupreme = {}

hashObject.forEach(card => {
    objectSupreme[card.cardCode] = {
      set: card.set,
      region: card.region,
      regions:card.regions,
      spellSpeed: card.spellSpeed,
      subtype:card.subtype,
      subtypes:card.subtypes,
      name: card.name,
      cost: card.cost,
      cardCode: card.cardCode
    }
  
  })

  fs.appendFile('bigData.json', JSON.stringify(objectSupreme), function (err) {
    if (err) throw err;
  });
})

}

// sampleData is the temporary array of the six cards we are using. 
let sampleData = [
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 0,
      "cost": 2,
      "health": 0,
      "description": "Give an ally +3|+0 or +0|+3 this round.",
      "descriptionRaw": "Give an ally +3|+0 or +0|+3 this round.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Never fear change. It will question you, test your limits. It is our greatest teacher.\" - Karma",
      "artistName": "SIXMOREVODKA",
      "name": "Twin Disciplines",
      "cardCode": "01IO012",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "COMMON",
      "rarityRef": "Common",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set1"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012T2.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012T2-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 0,
      "cost": 2,
      "health": 0,
      "description": "Give an ally +0|+3 this round.",
      "descriptionRaw": "Give an ally +0|+3 this round.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "",
      "artistName": "SIXMOREVODKA",
      "name": "Discipline of Fortitude",
      "cardCode": "01IO012T2",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": false,
      "set": "Set1"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012T1.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO012T1-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 0,
      "cost": 2,
      "health": 0,
      "description": "Give an ally +3|+0 this round.",
      "descriptionRaw": "Give an ally +3|+0 this round.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "",
      "artistName": "SIXMOREVODKA",
      "name": "Discipline of Force",
      "cardCode": "01IO012T1",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": false,
      "set": "Set1"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01IO015T1",
        "01IO015T2"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 4,
      "cost": 4,
      "health": 4,
      "description": "When you <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> an enemy, I deal 2 to it.",
      "descriptionRaw": "When you Stun or Recall an enemy, I deal 2 to it.",
      "levelupDescription": "You <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> 5+ units<style=Variable></style>.",
      "levelupDescriptionRaw": "You Stun or Recall 5+ units.",
      "flavorText": "\"Death is like the wind...\"",
      "artistName": "SIXMOREVODKA",
      "name": "Yasuo",
      "cardCode": "01IO015",
      "keywords": [
        "Quick Attack"
      ],
      "keywordRefs": [
        "QuickStrike"
      ],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "Champion",
      "rarityRef": "Champion",
      "subtype": "",
      "subtypes": [],
      "supertype": "Champion",
      "type": "Unit",
      "collectible": true,
      "set": "Set1"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01IO015",
        "01IO015T2"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015T1.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015T1-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 5,
      "cost": 4,
      "health": 5,
      "description": "When you <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> an enemy, I strike it.",
      "descriptionRaw": "When you Stun or Recall an enemy, I strike it.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"...always by my side.\"",
      "artistName": "SIXMOREVODKA",
      "name": "Yasuo",
      "cardCode": "01IO015T1",
      "keywords": [
        "Quick Attack"
      ],
      "keywordRefs": [
        "QuickStrike"
      ],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "Champion",
      "type": "Unit",
      "collectible": false,
      "set": "Set1"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [
        "01IO015T1",
        "01IO015"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015T2.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01IO015T2-full.png"
        }
      ],
      "region": "Ionia",
      "regionRef": "Ionia",
      "regions": [
        "Ionia"
      ],
      "regionRefs": [
        "Ionia"
      ],
      "attack": 0,
      "cost": 2,
      "health": 0,
      "description": "<link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> an attacking enemy.\r\nCreate a <link=card.level1><style=AssociatedCard>Yasuo</style></link> in your deck.",
      "descriptionRaw": "Stun an attacking enemy.\r\nCreate a Yasuo in your deck.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Hasagi!\" - Yasuo",
      "artistName": "Max Grecke",
      "name": "Yasuo's Steel Tempest",
      "cardCode": "01IO015T2",
      "keywords": [
        "Fast"
      ],
      "keywordRefs": [
        "Fast"
      ],
      "spellSpeed": "Fast",
      "spellSpeedRef": "Fast",
      "rarity": "None",
      "rarityRef": "None",
      "subtype": "",
      "subtypes": [],
      "supertype": "Champion",
      "type": "Spell",
      "collectible": false,
      "set": "Set1"
    }
    ]

// lorDangerSampleData is a more complicated data set since it deals with more than just the first set of LoR cards.
  const lorDangerSampleData = [{
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set5/en_us/img/cards/05BC188.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set5/en_us/img/cards/05BC188-full.png"
        }
      ],
      "region": "Bandle City",
      "regionRef": "BandleCity",
      "regions": [
        "Bandle City"
      ],
      "regionRefs": [
        "BandleCity"
      ],
      "attack": 4,
      "cost": 6,
      "health": 6,
      "description": "When you pick a card from randomly selected options, create a copy in hand and reduce its cost by 1.",
      "descriptionRaw": "When you pick a card from randomly selected options, create a copy in hand and reduce its cost by 1.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "Famously shy, the elusive shellfolk are known to hide in their shells until their curiosity gets the better of them. Once emerged, their playful personalities become fully engaged, including a propensity to play tricks by expertly mimicking the sound of other sea life.",
      "artistName": "Kudos Productions",
      "name": "Curious Shellfolk",
      "cardCode": "05BC188",
      "keywords": [],
      "keywordRefs": [],
      "spellSpeed": "",
      "spellSpeedRef": "",
      "rarity": "EPIC",
      "rarityRef": "Epic",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Unit",
      "collectible": true,
      "set": "Set5"
    },
      {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01NX053.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01NX053-full.png"
        }
      ],
      "region": "Noxus",
      "regionRef": "Noxus",
      "regions": [
        "Noxus"
      ],
      "regionRefs": [
        "Noxus"
      ],
      "attack": 0,
      "cost": 6,
      "health": 0,
      "description": "If you have a 5+ Power ally, kill ALL units with 4 or less Power.",
      "descriptionRaw": "If you have a 5+ Power ally, kill ALL units with 4 or less Power.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"WHO'S READY TO REEEEEECKONNNNNN?!\" - Arena Battlecaster",
      "artistName": "Kudos Productions",
      "name": "Reckoning",
      "cardCode": "01NX053",
      "keywords": [
        "Slow"
      ],
      "keywordRefs": [
        "Slow"
      ],
      "spellSpeed": "Slow",
      "spellSpeedRef": "Slow",
      "rarity": "EPIC",
      "rarityRef": "Epic",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set1"
    },{
        "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01NX053.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01NX053-full.png"
        }
      ],
      "region": "Noxus",
      "regionRef": "Noxus",
      "regions": [
        "Noxus"
      ],
      "regionRefs": [
        "Noxus"
      ],
      "attack": 0,
      "cost": 6,
      "health": 0,
      "description": "If you have a 5+ Power ally, kill ALL units with 4 or less Power.",
      "descriptionRaw": "If you have a 5+ Power ally, kill ALL units with 4 or less Power.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"WHO'S READY TO REEEEEECKONNNNNN?!\" - Arena Battlecaster",
      "artistName": "Kudos Productions",
      "name": "Reckoning",
      "cardCode": "01NX053",
      "keywords": [
        "Slow"
      ],
      "keywordRefs": [
        "Slow"
      ],
      "spellSpeed": "Slow",
      "spellSpeedRef": "Slow",
      "rarity": "EPIC",
      "rarityRef": "Epic",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set1"
    },
      {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01FR030.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set1/en_us/img/cards/01FR030-full.png"
        }
      ],
      "region": "Freljord",
      "regionRef": "Freljord",
      "regions": [
        "Freljord"
      ],
      "regionRefs": [
        "Freljord"
      ],
      "attack": 0,
      "cost": 1,
      "health": 0,
      "description": "<link=keyword.Frostbite><sprite name=Frostbite><style=Keyword>Frostbite</style></link> an enemy with 3 or less Health.",
      "descriptionRaw": "Frostbite an enemy with 3 or less Health.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Chilly? Ha! Let us hope that your spirits are sturdier than your summerland steel!\" - Braum",
      "artistName": "SIXMOREVODKA",
      "name": "Brittle Steel",
      "cardCode": "01FR030",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "COMMON",
      "rarityRef": "Common",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set1"
    },
      {
      "associatedCards": [],
      "associatedCardRefs": [
        "05BC001T1"
      ],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set5/en_us/img/cards/05BC001.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set5/en_us/img/cards/05BC001-full.png"
        }
      ],
      "region": "Bandle City",
      "regionRef": "BandleCity",
      "regions": [
        "Bandle City"
      ],
      "regionRefs": [
        "BandleCity"
      ],
      "attack": 0,
      "cost": 6,
      "health": 0,
      "description": "Transform a unit into a 3|3 <link=card.summon><style=AssociatedCard>Mini-Minitee</style></link> and <link=vocab.Silence><style=Vocab>Silence</style></link> it.",
      "descriptionRaw": "Transform a unit into a 3|3 Mini-Minitee and Silence it.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Oh-ho! How cute! How adorable! How TINY!\" - Veigar",
      "artistName": "Kudos Productions",
      "name": "Minimorph",
      "cardCode": "05BC001",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "RARE",
      "rarityRef": "Rare",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set5"
    },
    {
      "associatedCards": [],
      "associatedCardRefs": [],
      "assets": [
        {
          "gameAbsolutePath": "http://dd.b.pvp.net/2_16_0/set3/en_us/img/cards/03MT084.png",
          "fullAbsolutePath": "http://dd.b.pvp.net/2_16_0/set3/en_us/img/cards/03MT084-full.png"
        }
      ],
      "region": "Targon",
      "regionRef": "Targon",
      "regions": [
        "Targon"
      ],
      "regionRefs": [
        "Targon"
      ],
      "attack": 0,
      "cost": 5,
      "health": 0,
      "description": "<link=keyword.Invoke><style=Keyword>Invoke</style></link> a Celestial card that costs 7 or more, then heal an ally or your Nexus 4.",
      "descriptionRaw": "Invoke a Celestial card that costs 7 or more, then heal an ally or your Nexus 4.",
      "levelupDescription": "",
      "levelupDescriptionRaw": "",
      "flavorText": "\"Look to the stars. If you're lucky, I'll look back.\" - Aurelion Sol",
      "artistName": "Kudos Productions",
      "name": "Starshaping",
      "cardCode": "03MT084",
      "keywords": [
        "Burst"
      ],
      "keywordRefs": [
        "Burst"
      ],
      "spellSpeed": "Burst",
      "spellSpeedRef": "Burst",
      "rarity": "COMMON",
      "rarityRef": "Common",
      "subtype": "",
      "subtypes": [],
      "supertype": "",
      "type": "Spell",
      "collectible": true,
      "set": "Set3"
    }
  
  
  ]
  
// this is an example of the basic array that would be checked against lorDangerSampleData 
  let inputArray = [ "05BC188", "01NX053", "01SI015", "01FR030", "05BC001", "03MT084"]
  
  //6
//   console.log(sampleData.length)
  
  //empty object to catch all cards
  let objectSupreme = {
  
  }
  
  lorDangerSampleData.forEach(card => {
    objectSupreme[card.cardCode] = {
      set: card.set,
      region: card.region,
      regions:card.regions,
      spellSpeed: card.spellSpeed,
      subtype:card.subtype,
      subtypes:card.subtypes,
      name: card.name
    }
  
  })
  
//   console.log(objectSupreme['03MT084'])

//   fs.appendFile('mynewfile1.json', JSON.stringify(objectSupreme), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  
  // known example of solid parsing of sampleData
  // expecting "Ionia"