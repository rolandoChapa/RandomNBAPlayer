import React from "react"
import axios from 'axios'
import data from './players.js'
import StateNBACards from "./StateNBACards"

export default function GetNBAData() {

	// from the players.js we imported
	// let's get the info we need

    var nbaArray = data;

    var reformatData = function(players) {
        return players.map(function(player) {
            var newNBAData = {};
            newNBAData["fullName"] = player.firstName + " " + player.lastName;
            newNBAData["personId"] = player.personId;
            newNBAData["playerNumber"] = player.jersey;
            newNBAData["height"] = player.heightFeet + "'" +player.heightInches;
            newNBAData["college"] = player.collegeName;
            newNBAData["country"] = player.country;

            // return our new object
            return newNBAData;

        })
    }

    // call the function to get player data only specific to our app
    var nbaData = reformatData(nbaArray)
    // get a random player
    const randomNumber = Math.floor(Math.random() * nbaData.length)
    // set the state to be a random player
    // to get a new random player dynamically
    // we will have a button that will call a new random number
    // and it'll set setCurrentPlayer to the new player to get their information
    const [currentPlayer, setCurrentPlayer] = React.useState(nbaData[randomNumber])
  

    const [playerStats, setPlayerStats] = React.useState({})

    let url = `http://data.nba.net/10s/prod/v1/2021/players/${currentPlayer.personId}_profile.json`

    React.useEffect(() => {
    	axios.get(url).then((response) => {
    		setPlayerStats(response.data.league.standard.stats.careerSummary)
    	})
    },[currentPlayer])

    let headshotURL = `https://cdn.nba.com/headshots/nba/latest/1040x760/${currentPlayer.personId}.png`

    function getNewPlayer(){
    	const randomNumber2 = Math.floor(Math.random() * nbaData.length)
    	setCurrentPlayer(nbaData[randomNumber2])
    }

   return (
    	<section>
    		<StateNBACards 
			key={currentPlayer.personId}
			onButton={getNewPlayer}
			id={currentPlayer.personId}
			name={currentPlayer.fullName}
			image={headshotURL}
			games={playerStats.gamesPlayed}
			pointspergame={playerStats.ppg}
			reboundpergame={playerStats.rpg}
			assistpergame={playerStats.apg}
			fgpercent={playerStats.fgp}
			freethrow={playerStats.ftp}
			threeptpercent={playerStats.tpp}
			/>
    	</section>
    	)

    
    

}