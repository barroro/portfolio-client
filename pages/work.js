import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import { useSelector, useDispatch } from 'react-redux';
import { worksActions } from '../redux/store/actions/WorksActions';
import Header from '../components/header';

import bgImage from '../src/images/component.png';
import Footer from '../components/footer';

export default function Work() {

  const dispatch = useDispatch();
  const { works } = useSelector(state => state.worksReducer);

  //Get products
  useEffect(() => {
    dispatch(worksActions.getWorksAction());
    console.log('Works: ', works);
  }, [dispatch])

  return (
    <div className="work-page">
      <Head>
        <title>Proyecto Test | Branding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="work-main-section" style={{ backgroundImage: `url(${bgImage})` }}>
        <span>Main image 100 vh</span>
        <div className="arrow-container">
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>
      <div className="work-main-text-container">
        <div className="work-main-text-right">
          <h1 className="main-title">Gulú!</h1>
          <h2 className="main-subtitle">Subtitle example with long text</h2>
          <div className="team-list-container">
            <span className="team-list-title">Equipo</span>
            <p>Persona 1 (ejemplo), Persona 2 (Ejemplo), Persona 3(Ejemplo)</p>
          </div>
        </div>
        <div className="work-main-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="work-section">
        section
      </div>
      <Footer />
    </div>
  );
}
