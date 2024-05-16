import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import { createDeck } from './utils/deck'
import { shuffleDeck } from './utils/shuffle'
import './App.css'

function App() {
  const [deck, setDeck] = useState(createDeck())

  useEffect(() => {
    setDeck(shuffleDeck([...deck])) // Shuffling the deck initially
  }, [])

  return (
    <div className='deck'>
      {deck.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  )
}

export default App
