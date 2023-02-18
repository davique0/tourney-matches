import React from 'react'

export default function Match(props) {
  return (
    <article className='Match'>
      <h1>{props.players[0]} <span>vs</span> {props.players[1]}</h1>
      {/*ask if there is a winner and shows it if there is one or no if undefined*/}
      {props.winner ? <h2>{props.winner} is the winner by {props.scoreDifference}!</h2> : <h2>No winners yet!</h2>}
    </article>
  )
}
