import './App.css';
import Playerlist from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';


function App() {
  //calling helper function to get an array of players
  const playerDataArray = preparePlayerData(playerData)
  //calling helper function to add winnings to the players
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
     <Playerlist matchData={matchData} playerData={parsedPlayerData} />
     <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
