import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
import Footer from '../Footer'

export default function AboutUs() {
  return (
    <>
      <h1 className='about-us'> About Us</h1>
      <h2 className='about-us-h2'>
        Innate Cosmetics blah blah blah....
        <p className='about-us-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus odio odio, sit amet porta justo auctor id. Donec sodales mi et magna luctus condimentum ac ultrices ligula. Mauris cursus, ante accumsan lacinia posuere, nibh ligula ultricies felis, sed pretium lacus felis non orci. Donec nec felis a felis sollicitudin vestibulum ac eu libero. Sed efficitur lacinia ligula et condimentum. Ut laoreet, ante non vulputate mollis, dui nisl luctus ante, eu blandit tellus sapien et lacus. Aliquam sed nulla lorem. Nullam ac facilisis felis. Fusce tempus ipsum ipsum, at finibus sapien fermentum at.
        </p>
      </h2>
      {/* <HeroSection /> */}
      <Footer />
    </>
  );
}