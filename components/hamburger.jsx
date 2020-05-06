import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';

// import dallas from '../images/dallas.webp';
// import austin from '../images/austin.webp';
// import newyork from '../images/newyork.webp';
// import sanfrancisco from '../images/sanfrancisco.webp';
// import beijing from '../images/beijing.webp';

// const cities = [
//   { name: 'Dallas', image: dallas },
//   { name: 'Austin', image: austin },
//   { name: 'New York', image: newyork },
//   { name: 'San Francisco', image: sanfrancisco },
//   { name: 'Beijing', image: beijing }
// ];

const Hamburger = ({ state }) => {
  //Vards for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (state.clicked === true ||
      (state.clicked === true && state.initial === null)) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
    }
    // if (state.clicked === false) {
    //   gsap.to([revealMenu, revealMenuBackground], {
    //     duration: 0.8,
    //     height: 0,
    //     ease: "power3.inOut",
    //     stagger: {
    //       amount: 0.07
    //     }
    //   });
    //   gsap.to(menu, {
    //     duration: 1,
    //     css: { display: "none" }
    //   });
    // } else if (state.clicked === true ||
    //   (state.clicked === true && state.initial === null)) {
    //   gsap.to(menu, {
    //     duration: 0,
    //     css: { display: "block" }
    //   });
    //   gsap.to([revealMenuBackground, revealMenu], {
    //     duration: 0,
    //     opacity: 1,
    //     height: "100%"
    //   });
    //   staggerReveal(revealMenuBackground, revealMenu);
    //   fadeInUp(info);
    //   staggerText(line1, line2, line3);
    // }
  }, [state])


  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: .8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1
      }
    });
  }

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  }


  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: 'power3.inOut'
    });
  };

  // const handleCity = city => {
  //   gsap.to(cityBackground, {
  //     duration: 0,
  //     background: `url(${city}) center center`
  //   });
  //   gsap.to(cityBackground, {
  //     duration: 0.4,
  //     opacity: 1,
  //     ease: "power3.inOut"
  //   });
  //   gsap.from(cityBackground, {
  //     duration: 0.4,
  //     skeyY: 2,
  //     transformOrigin: 'right top'
  //   });
  // }

  // const handleCityReturn = () => {
  //   gsap.to(cityBackground, {
  //     duration: .4,
  //     opacity: 0
  //   });
  // };

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut"
    });
  }

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    });
  }

  return <div ref={el => (menu = el)} className='hamburger-menu'>
    <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
    <div ref={el => (revealMenu = el)} className="menu-layer">
      <div className="menu-city-background" ref={el => (cityBackground = el)}></div>
      <div className="container">
        <div className="wrapper">
          <div className="menu-links">
            <div ref={el => (info = el)} className="info">
              <h3>Sobre mi</h3>
              <p>Lorem Ipsum es <strong>test</strong> simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            </div>
            <div className="info-contact-container">
              <a className="mail-link" href="mailto:info@laurasolano.com">info@laurasolano.com</a>
              <div className="social-networks-container">
                <a href="" className="social-network-link">LinkenIn</a>
                <a href="" className="social-network-link">Instagram</a>
                <a href="" className="social-network-link">Facebook</a>
                <a href="" className="social-network-link">Beehance</a>
              </div>
            </div>
            {/* <div className="locations">
              Locations:
              {cities.map(c => (
              <span key={c.name} onMouseEnter={() => handleCity(c.image)} onMouseOut={handleCityReturn}>{c.name}</span>
            ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Hamburger;
