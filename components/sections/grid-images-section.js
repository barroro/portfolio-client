import React from 'react';

const ImageNotFound = () => (
  <div className="img-not-found">
    <i class="fas fa-image"></i>
    <span>Image not found</span>
  </div>
);

function GridImagesSection(props) {
  const { section } = props;
  return (
    <div className="work-section" key={`work-section-${section.id}`}>
      <h3 className="work-section-title">{section.title}</h3>
      <h4 className="work-section-subtitle">{section.subtitle}</h4>
      <p className="work-section-content">{section.content}</p>
      {
        section.images.length > 0 && (
          <div className="work-section-images">
            <div className="work-section-main-image">
              {
                section.images[0] ? <img src={`http://localhost:8000/${section.images[0].path}`} key={section.images[0].id} /> : <ImageNotFound />
              }
            </div>
            <div className="row">
              <div className="work-section-secondary-image">
                {
                  section.images[1] ? <img src={`http://localhost:8000/${section.images[1].path}`} key={section.images[1].id} /> : <ImageNotFound />
                }
              </div>
              <div className="work-section-secondary-image">
                {
                  section.images[2] ? <img src={`http://localhost:8000/${section.images[2].path}`} key={section.images[2].id} /> : <ImageNotFound />
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default GridImagesSection;