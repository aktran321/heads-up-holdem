import React, { useState, useEffect } from 'react';
import CardComponent from './components/Card';
import { createDeck } from './utils/deck';
import { shuffleDeck } from './utils/shuffle';
import { Player } from './models/Player';
import { Card as CardType } from './models/Card';

function App() {
    const [deck, setDeck] = useState<CardType[]>(createDeck());
    const initialPlayers: Player[] = [
      { hand: [] as CardType[] },
      { hand: [] as CardType[] }
  ];
  
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

    useEffect(() => {
        const shuffledDeck = shuffleDeck([...deck]);
        setDeck(shuffledDeck);
        dealCards(shuffledDeck);
    }, []);

    const dealCards = (deck: CardType[]) => {
      let newDeck = [...deck];  // Cloning to avoid direct modification
      let newPlayers = players.map(player => ({
          ...player,
          hand: [] as CardType[]  // Resetting hand, ensuring it's typed correctly
      }));
  
      for (let i = 0; i < 4; i++) {
          const playerIndex = i % 2;
          const card = newDeck.shift();
          if (card) {
              newPlayers[playerIndex].hand.push(card);
          }
      }
  
      setPlayers(newPlayers);
      setDeck(newDeck);
  };
  

    return (
        <div className="game">
            {players.map((player, index) => (
                <div key={index} className="player">
                    {player.hand.map((card, cardIndex) => (
                        <CardComponent key={cardIndex} card={card} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
