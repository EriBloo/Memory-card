import React from 'react';
import '../styles/Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className='title'>Pokemon memory game</h1>
      <div className='slider-container'>
        <h2>Number of cards: {props.cardsNumber}</h2>
        <input type='range' min='8' max='37' defaultValue={props.cardsNumber} step='1' className='slider' onChange={props.changeCardsNumber} />
      </div>
      <div className='score-wrapper'>
        <h2 className='score'>Current score: {props.score}</h2>
        <h2 className='best'>Best score: {props.best}</h2>
      </div>
    </header>
  );
}

export default Header;
