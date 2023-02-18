import React from 'react'

export default function Player(props) {
  return (
    <article className='Player'>
      <h1>{props.firstName} <span>{props.gamerTag}</span> {props.lastName}</h1>
      {/*To be shown if there are no Wins */}
      {!props.wins && <h2 className='zero'>Currently no wins</h2>}
      {props.wins === 1 && <h2>Currently at {props.wins} win</h2>}
      {props.wins > 1 && <h2>Currently at {props.wins} wins</h2>}
      
    </article>
  )
}
