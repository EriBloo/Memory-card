import React, { useState, useEffect } from "react";
import pokemonData from "../pokemonData";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
  }, [score]);

  function incrementScore() {
    setScore(score + 1);
  }

  const [cardsNumber, setCardsNumber] = useState(12);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getNewCards();
    setBest(0);
    setScore(0);
    setClicked([]);
  }, [cardsNumber]);

  function getNewCards() {
    const newCards = [];
    const pokemonCopy = [...pokemonData];
    for (let i = 0; i < cardsNumber; i += 1) {
      const rndIndex = Math.floor(Math.random() * pokemonCopy.length);
      newCards.push(pokemonCopy.splice(rndIndex, 1));
    }
    setCards(newCards);
  }

  function changeCardsNumber({ target }) {
    setCardsNumber(target.value);
  }

  function shuffleCards() {
    const cardsCopy = [...cards];
    for (let i = 0; i < cardsCopy.length; i += 1) {
      const j = Math.floor(Math.random() * cardsCopy.length);
      [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }
    setCards(cardsCopy);
  }

  const [clicked, setClicked] = useState([]);

  function clickCard({ currentTarget }) {
    const pokemon = currentTarget.getAttribute("data");
    if (clicked.includes(pokemon)) {
      setScore(0);
      setClicked([]);
      getNewCards();
    } else {
      incrementScore();
      setClicked([...clicked, pokemon]);
      shuffleCards();
    }
  }

  return (
    <div className="app">
      <Header
        score={score}
        best={best}
        cardsNumber={cardsNumber}
        changeCardsNumber={changeCardsNumber}
      />
      <Content cards={cards} clickCard={clickCard} />
    </div>
  );
};

export default App;
