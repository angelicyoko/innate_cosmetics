import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Elevate your Nail game with these products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='innate_cosmetics_website/src/images/innate_orange.jpeg'
              text='Product Description kekw'
              label='Product'
              path='/products'
            />
            <CardItem
              src= 'innate_cosmetics_website/src/images/innate_orange.jpeg'
              text='Product Description kekw'
              label='Product'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="innate_cosmetics_website/src/images/innate_orange.jpeg"
              text='Product Description kekw'
              label='Product'
              path='/products'
            />
            <CardItem
              src='images/innate_orange.jpeg'
              text='Product Description kekw'
              label='Product'
              path='/products'
            />
            <CardItem
              img src='/Users/ashafer/innate_cosmetics/innate_cosmetics/innate_cosmetics_website/src/images/innate_brush.jpeg/'
              text='Product Description kekw'
              label='Product'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;