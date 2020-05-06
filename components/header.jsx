import React, { useState } from 'react';
import logo from '../src/images/logo.gif';
import Hamburger from './hamburger';
import Link from 'next/link';

const Header = () => {

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

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  };


  return (
    <nav className="header">
      <div className="nav-left-item-container">
        language selector
      </div>
      <div className="nav-logo-container">
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-right-item-container">
        <i className="fas fa-info" onClick={handleMenu}></i>
      </div>
      <Hamburger state={state} />
    </nav>
  )
}

export default Header;