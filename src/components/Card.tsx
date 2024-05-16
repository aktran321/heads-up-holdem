// src/components/Card.tsx
import React from 'react'
import { Card as CardType } from '../models/card'

interface CardProps {
  card: CardType
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='card'>
      {card.rank} of {card.suit}
    </div>
  )
}

export default Card
