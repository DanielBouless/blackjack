import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [trueCount, setTrueCount] = useState(0);
  const [playedCards, setPlayedCards] = useState(0);
  const [decks, setDecks] = useState(8);
  const [decksPlayed, setDecksPlayed] = useState(0);
  const [remainDecks, setRemainDecks] = useState(1);

  const checkDecks = () => {
    if (playedCards % 52 === 0) {
      setDecksPlayed(decksPlayed + 1);
      setRemainDecks(decks - decksPlayed);
    }
    setTrueCount(count / remainDecks);
  };

  const minusOne = () => {
    const newCount = count - 1;
    setCount(newCount);
    setPlayedCards(playedCards + 1);
    checkDecks();
  };

  const plusOne = () => {
    const newCount = count + 1;
    setCount(newCount);
    setPlayedCards(playedCards + 1);
    checkDecks();
  };

  const noChange = () => {
    console.log(`no change, count: ${count}`);
    setPlayedCards(playedCards + 1);
    checkDecks();
  };

  const lessDeck = () => {
    const updateDecks = decks - 1;
    if (updateDecks < 1) {
      setDecks(1);
      setRemainDecks(1);
    } else {
      setDecks(updateDecks);
      setRemainDecks(updateDecks);
    }
  };

  const plusDeck = () => {
    const updateDecks = decks + 1;
    setDecks(updateDecks);
    setRemainDecks(updateDecks);
  };

  return (
    <div className="App">
      <CardGroup>
        <Card>
          <Card.Title>Number of Decks: {decks} </Card.Title>
          <Button onClick={lessDeck}>-</Button>
          <Button onClick={plusDeck}>+</Button>
        </Card>
        <Card>
          <Card.Title>COUNT: {count}</Card.Title>
        </Card>
        <Card>
          <Card.Title>True Count: {trueCount}</Card.Title>
        </Card>
        <Card>
          <Card.Title>Cards Played: {playedCards}</Card.Title>
        </Card>
        <Card>
          <Card.Title>Decks Remaining: {remainDecks}</Card.Title>
        </Card>
        <Card>
          <Card.Title>6 & Under</Card.Title>
          <Button onClick={plusOne}>Select</Button>
        </Card>
        <Card>
          <Card.Title>7 thru 9</Card.Title>
          <Button onClick={noChange}>Select</Button>
        </Card>
        <Card>
          <Card.Title>10 & Up, Ace</Card.Title>
          <Button onClick={minusOne}>Select</Button>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
