import React, { useEffect, createRef } from 'react';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { worksActions } from '../redux/store/actions/WorksActions';
import arrow from '../src/icons/arrow-icon-yellow100.svg';
import { TimelineLite, CSSPlugin } from "gsap/all";

const WorksPreview = () => {

  const dispatch = useDispatch();
  const { activeWorks } = useSelector(state => state.worksReducer);
  const tl = new TimelineLite({ paused: true });

  useEffect(() => {
    dispatch(worksActions.getActiveWorksAction())
  }, [dispatch])

  const [elRefs, setElRefs] = React.useState([]);

  React.useEffect(() => {
    // add or remove refs
    setElRefs(elRefs => (
      Array(activeWorks.length).fill().map((_, i) => elRefs[i] || createRef())
    ));
  }, [activeWorks.length]);

  useEffect(() => {
    elRefs.map(e => console.log(e.current.target))
  }, [elRefs])

  return (
    <div className="masonry">
      {
        activeWorks && activeWorks.map((w, index) => {
          return (
            <div ref={elRefs[index]} key={w.id} className="item">
              <div className="work-preview-overlay-container" style={{ backgroundImage: `url(http://localhost:8000/${w.images[1].path})` }}>
                <span className="arrow-container">
                  <Link href={`/works/${w.id}`}>
                    {/* <div className="arrow">
                      <div className="arrow-inner"></div>
                    </div> */}
                    <img src={arrow} />
                  </Link>
                </span>
              </div>
              <div className="image-container" >
                <img src={`http://localhost:8000/${w.images[0].path}`} alt={w.images[0].name} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default WorksPreview;