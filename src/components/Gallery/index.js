import React from 'react';
import one from '../../assets/images/projects/IMG_3778.jpeg'
import two from '../../assets/images/projects/IMG_3779.jpeg'
import three from '../../assets/images/projects/IMG_3776.jpeg'
import four from '../../assets/images/projects/IMG_3773.jpeg'
import five from '../../assets/images/projects/IMG_3953.jpeg'
import six from '../../assets/images/projects/IMG_3950.jpeg'
import seven from '../../assets/images/projects/IMG_4214.jpeg'
import eight from '../../assets/images/projects/IMG_4887.jpeg'
import nine from '../../assets/images/projects/IMG_3258.jpeg'
import ten from '../../assets/images/projects/IMG_3618.jpeg'

function Gallery() {
  return (
    <section>
        <h1 className='header'>Gallery</h1>
        <div className='grid-container'>
          <img src={one} alt="" className='grid-item' width="500"/>
          <img src={two} alt="" className='grid-item' width="500"/>
          <img src={three} alt="" className='grid-item' width="500"/>
          <img src={four} alt="" className='grid-item' width="500"/>
          <img src={five} alt="" className='grid-item' width="500"/>
          <img src={six} alt="" className='grid-item' width="500"/>
          <img src={seven} alt="" className='grid-item' width="500"/>
          <img src={eight} alt="" className='grid-item' width="500"/>
          <img src={nine} alt="" className='grid-item' width="500"/>
          <img src={ten} alt="" className='grid-item' width="500"/>
        </div>
    </section>
  );
}

export default Gallery;