import React from 'react';
import '../styles/Card.scss';

const Card = (props) => {
  return (
    <div className='card-wrapper'>
      <div className='card' data={props.name} onClick={props.clickCard}>
        <div className='image-wrapper'>
          <img src={props.image} alt={props.name} className='image' />
        </div>
        <h3 className='name'>{props.name}</h3>

      </div>
    </div>
  )
}

export default Card;
