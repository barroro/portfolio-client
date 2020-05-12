import React, { useState, useEffect, useRef, createRef } from 'react';
import logo from '../src/images/logo.gif';
import infoIcon from '../src/icons/i-icon_black.svg';
import Hamburger from './hamburger';
import Link from 'next/link';

const Header = () => {

  const header = useRef(null);

  //State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  //State for disabled button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (header.current) {
        if (window.pageYOffset > 150) {
          header.current.classList.add('sticky');
        } else {
          header.current.classList.remove('sticky');
        }
      }
    });
  }, [])

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  };


  return (
    <nav ref={header} className="header">
      <div className="nav-left-item-container">
        <span>en</span>
      </div>
      <div className="nav-center-item-container">
        <div className="nav-logo-container">
          <Link href="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="nav-right-item-container" onClick={handleMenu}>
        <img src={infoIcon} alt="info" />
      </div>
      <Hamburger state={state} />
    </nav>
  )
}

export default Header;