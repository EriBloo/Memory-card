import React from 'react';
import Card from './Card';
import '../styles/Content.scss';

const Content = (props) => {
  const pokemon = (poke) => {
    return {
      name: poke,
      image: require(`../img/${poke}.png`)
    }
  }
  return (
    <div className='content-wrapper'>
      {props.cards.map((card, index) => {
        const pokemonCard = pokemon(card);
        return (
          <Card key={index} image={pokemonCard.image} name={pokemonCard.name} clickCard={props.clickCard} />
        )
      })}
    </div>
  )
}

export default Content;