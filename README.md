# Starlit Epiphany
This is a NextJS app intended to help someone playing Legends of Runeterra predict what cards are most likely to be used against them at any given time. 

## Data Files - From 10 October 2021 
**Development Note**: This app relies on the presence of "data dragon" data files in the /data and /public directories. Since the data files are quite large, I have not included them in this repository. They are available for free from the [Riot developer website](https://developer.riotgames.com/), but if you do not wish to create a Riot account to use the app in its current state, I have uploaded the data files to a Google Drive to download on your personal machine. ([LINK](https://bit.ly/302M9l9)) 

If I deploy this app for others to use, this will no longer be necessary. 

## How to Use 
1. Install Dependencies with 

```npm install```

then run the app with  

```npm run dev```

Once the app has started, use it by navigating to http://localhost:3000/starlit-epiphany

2. The starting view corresponds to a list of "danger cards" located in /data/dangerCards.js. These are unfiltered. 

3. You can click on up to two regions to filter by region. Clicking a third region will do nothing, while clicking an already selected region will remove that region from the filter, leaving you with one filtered region. 

4. You can click a cost to filter all cards that cost *more* than that number to cast. The idea is that if your opponent has 6 mana, you also want to know what they can cast for <6 mana. 

5. If you enter a deck code, the right-hand "deck" column will populate. At present, it isn't possible to interact with this column except by entering a new deck code.

## Template Origins
It is built on top of the starter template for [Learn Next.js](https://nextjs.org/learn), and it will eventually incorporate the Riot Legends of Runeterra live game API to keep track of a game in progress. 

Features and design intentions are in TODO.md. 