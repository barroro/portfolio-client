import React, { useState } from 'react';
import arrow from '../../src/icons/arrow-icon-yellow100.svg';

function ImageSlider(props) {
  const { sliders, className } = props;
  const [activeSlider, setActiveSlider] = useState(0);
  const getClassNames = (i) => {
    if (activeSlider == i) {
      return 'slider-item active';
    } else {
      return 'slider-item';
    }
  }
  const prevSlider = () => {
    if (activeSlider > 0) {
      setActiveSlider(activeSlider - 1);
    }
  }
  const nextSlider = () => {
    if (activeSlider < sliders.length - 1) {
      setActiveSlider(activeSlider + 1);
    }
  }
  return (
    <div className={`slider-container ${className}`}>
      <img src={arrow} className="arrow-left" onClick={prevSlider} />
      <img src={arrow} className="arrow-right" onClick={nextSlider} />
      {
        sliders && sliders.map((s, i) => {
          return (
            <div className={getClassNames(i)} key={`slider-item-${i}`} >
              <img src={`http://localhost:8000/${s.path}`} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ImageSlider;