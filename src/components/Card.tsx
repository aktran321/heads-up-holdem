import React from 'react'
import {Card as CardType} from '../models/Card'
import './Card.css'

interface CardProps {
  card: CardType
}
const suitSymbols: { [key: string]: string } = {
  Hearts: '♥',
  Diamonds: '♦',
  Clubs: '♣',
  Spades: '♠',
}

const Card: React.FC<CardProps> = ({ card }) => {
  const suitSymbol = suitSymbols[card.suit]
  return (
    <div className={`card ${card.suit}`}>
      <div className='card-top'>
        <span className='card-rank'>{card.rank}</span>
        <span className='card-suit'>{suitSymbol}</span>
      </div>
      <div className='card-bottom'>
        <span className='card-rank'>{card.rank}</span>
        <span className='card-suit'>{suitSymbol}</span>
      </div>
    </div>
  )
}

export default Card
