import { Card } from '../models/card';

export const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'] as const;
export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as const;

export function createDeck(): Card[] {
  let deck: Card[] = []; // deck is an array that holds multiple Cards
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ suit, rank }); // nested for loop to combine all suits and ranks, completing the unshuffled deck of cards.
    }
  }
  return deck;
}
