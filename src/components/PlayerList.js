import React from 'react';
import Player from './Player';

export default function PlayerList(props) {
  const players = props.playerData.map(player => {
    return (
      <Player 
        gamerTag={player.gamerTag} 
        firstName={player.firstName} 
        lastName={player.lastName}
        wins={player.wins} />
    );
  });
  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      { players }
    </section>
  )
}
