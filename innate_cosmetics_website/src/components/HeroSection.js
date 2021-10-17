import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Users/ashafer/innate_cosmetics/innate_cosmetics/innate_cosmetics_website/src/images/joke.mp4' autoPlay loop muted />
      <h1>Swipe to your next date, Vanilla Scented Acetone is here to stay!</h1>
      <p>Design and rewind!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link
                to='/products'
                className='hero-links'
                // onClick={closeMobileMenu}
              >
                GET STARTED
              </Link>
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;