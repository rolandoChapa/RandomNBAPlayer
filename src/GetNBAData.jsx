import React from "react"
import axios from 'axios'
import data from './players.js'
import SearchNBACards from "./SearchNBA"
import SpinLoadingScreen from './SpinLoading'
import NavBarNBA from './navBarNBA'
import NBAPlayerCard from './NBAPlayerCard'



export default function GetNBAData() {

    // from the players.js we imported
    // let's get the info we need

    var nbaArray = data;

    // function delcaration to figure out if teamid matches


    // function declartion to reformat the data from the
    // players.js file we set into nbaArray
    var reformatJSONData = function(players) {
        return players.map(function(player) {
            var newNBAData = {};
            newNBAData["firstName"] = player.firstName;
            newNBAData["lastName"] = player.lastName;
            newNBAData["personId"] = player.personId;
            newNBAData["playerNumber"] = player.jersey;
            newNBAData["teamId"] = player.teamId;
            newNBAData["height"] = player.heightFeet + "'" + player.heightInches;
            newNBAData["weight"] = player.weightPounds;
            newNBAData["draftRoundPick"] = "Round: " + player.draft.roundNum + " " + "Pick: " + player.draft.pickNum;
            newNBAData["draftYear"] = player.draft.seasonYear;
            newNBAData["nbaDebut"] = player.nbaDebutYear;
            newNBAData["yearsPro"] = player.yearsPro;
            newNBAData["positon"] = player.pos;
            newNBAData["college"] = player.collegeName;
            newNBAData["country"] = player.country;
            newNBAData["DOB"] = player.dateOfBirthUTC;

            // return our new object
            return newNBAData;

        })
    }

    // Set the State to call the function to get 
    // player data only specific to our app

    const [nbaData, setNBAData] = React.useState(reformatJSONData(nbaArray))
    // get a random player
    const randomNumber = Math.floor(Math.random() * nbaData.length)
    // set the state to be a random index
    // to get a new random player dynamically
    // we will have a button that will call a new random number
    // and it'll set setCurrentPlayer to the new player to get their information
    const [currentPlayer, setCurrentPlayer] = React.useState(nbaData[randomNumber])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    // create a new state for the players stats
    // initialize it to a empty object
    const [playerStats, setPlayerStats] = React.useState({})
    const [playerNews, setPlayerNews] = React.useState({})


    // api url to get current players stats
    let playerStatsURL = `https://data.nba.net/10s/prod/v1/2021/players/${currentPlayer.personId}_profile.json`

    let rotowireURL = `https://stats-prod.nba.com/wp-json/statscms/v1/rotowire/player/?playerId=${currentPlayer.personId}&limit=10&offset=0`

    // useEffect used to only refresh data only when a new player is set
    // also set it for when a player is searched
    React.useEffect(() => {
        setIsLoading(true)
        axios.get(playerStatsURL).then((response) => {
            setPlayerStats(response["data"]["league"]["standard"]["stats"]["regularSeason"]["season"]['0']['total'])
            setIsLoading(false)
        })
        if (currentPlayer['teamId'] === ""){
            getNewPlayer()
        }
    }, [currentPlayer])

    React.useEffect(() => {
        setIsLoading(true)
        axios.get(rotowireURL).then((response) => {
            setPlayerNews(response["data"]["PlayerRotowires"]["0"])
            setIsLoading(false)
        }).catch(error => {
            setError[error]
        })
    }, [currentPlayer])

    let headshotURL = `https://cdn.nba.com/headshots/nba/latest/1040x760/${currentPlayer.personId}.png`
    let teamLogoURL = `https://cdn.nba.com/logos/nba/${currentPlayer.teamId}/primary/L/logo.svg`
    let teamURL = `https://www.nba.com/team/${currentPlayer.teamId}`
    let playerURL = `https://www.nba.com/player/${currentPlayer.personId}`

    function getNewPlayer() {
        const randomNumber2 = Math.floor(Math.random() * nbaData.length)
        setCurrentPlayer(nbaData[randomNumber2])
    }

    /* Set State for searchInputs */

    const [searchPlayer, setSearchPlayer] = React.useState("")


    /* search Values are set here */

    let searchedPlayerArray = []

    nbaData.filter(searchedPlayer => {
        if (searchPlayer === '') {
            searchedPlayerArray = searchedPlayer
        } else if (searchedPlayer.fullName.toLowerCase().includes(searchPlayer.toLowerCase())) {

            searchedPlayerArray = searchedPlayer
        }

    })

    function setSearchedPlayer() {
        setCurrentPlayer(searchedPlayerArray)
    }

    return (
    <React.Fragment>
      {isLoading ? ( <SpinLoadingScreen /> ) : (
        <section>
            <NavBarNBA />
            {/* <SearchNBACards /> */}
            <NBAPlayerCard 
            key={currentPlayer.personId}
            getNew={getNewPlayer}
            id={currentPlayer.personId}
            firstName={currentPlayer.firstName}
            lastName={currentPlayer.lastName}
            number={currentPlayer.playerNumber}
            positon={currentPlayer.positon}
            draftRoundPick={currentPlayer.draftRoundPick}
            debut={currentPlayer.nbaDebut}
            height={currentPlayer.height}
            weight={currentPlayer.weight}
            yearsPro={currentPlayer.yearsPro}
            birthday={currentPlayer.DOB}
            country={currentPlayer.country}
            university={currentPlayer.college}
            // Team Assets
            playerHeadshot={headshotURL}
            teamLogo={teamLogoURL}
            teamURL={teamURL}
            playerURL={playerURL}
            // Player Stats Averages
            ppg2021Season={playerStats.ppg}
            mpg2021Season={playerStats.mpg}
            rpg2021Season={playerStats.rpg}
            apg2021Season={playerStats.apg}
            bpg2021Season={playerStats.bpg}
            topg2021Season={playerStats.topg}
            threepercent2021Season={playerStats.tpp}
            ftpercent2021Season={playerStats.ftp}
            fgpercent2021Season={playerStats.fgp}
            spg2021Season={playerStats.spg}
            // Player Stats Totals
            totalgames={playerStats.gamesPlayed}
            plusminus={playerStats.plusMinus}
            // RotoWire
            rotowireHeadline={playerNews.Headline}
            rotowirePost={playerNews.ListItemDescription}
            rotowirePublishDate={playerNews.ListItemPubDate}
            />
        </section>
      )}
    </React.Fragment>
  )
}