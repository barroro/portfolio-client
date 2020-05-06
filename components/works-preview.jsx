import React from 'react';
import Link from 'next/link'

const WorksPreview = () => {
  return (
    <div className="works-preview-container">
      <div className="works-preview-column">
        <div className="work-preview-container">
          <div className="work-preview-overlay-container">
            <span className="arrow-container">
              <Link href="/work">
                <div className="arrow">
                  <div className="arrow-inner"></div>
                </div>
              </Link>
            </span>
          </div>
          <div className="image-container">
            <span>image example</span>
          </div>
        </div>
      </div>
      <div className="works-preview-column">
        column 2
      </div>
      <div className="works-preview-column">
        column 3
      </div>
      <div className="works-preview-column">
        column 4
      </div>
    </div>
  )
}

export default WorksPreview;