import React from 'react';
import ImageSlider from '../images/image-slider';

function CarouselSection(props) {
  const { section } = props;
  return (
    <div className="work-section" key={`work-section-${section.id}`}>
      <h3 className="work-section-title">{section.title}</h3>
      <h4 className="work-section-subtitle">{section.subtitle}</h4>
      <p className="work-section-content">{section.content}</p>
      <div className="work-section-carousel">
        <ImageSlider className="carousel" sliders={section.images} />
      </div>
    </div>
  )
}

export default CarouselSection;