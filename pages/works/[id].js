import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { worksActions } from '../../redux/store/actions/WorksActions';
import Header from '../../components/header';

import bgImage from '../../src/images/component.png';
import Footer from '../../components/footer';
import { WorkService } from '../../services/WorkService';
import arrowYellow from '../../src/icons/arrow-icon-yellow100.svg';
import arrowBlack from '../../src/icons/arrow-icon-black.svg';
import ImageSlider from '../../components/images/image-slider';
import CarouselSection from '../../components/sections/carousel-section';
import GridImagesSection from '../../components/sections/grid-images-section';
import PageLoading from '../../components/ui/page-loading';

const workService = new WorkService();

function Work({ work, nextId }) {
  const router = useRouter()
  const [currentUrl, setUrl] = useState('https://www.google.es');

  useEffect(() => {
    //setUrl(window.location.href);
  }, [router])

  if (router.isFallback) {
    return <PageLoading />
  }

  return (
    <div className="work-page">
      <Head>
        <title>Laura Solano | {work.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={work.subtitle}></meta>
      </Head>
      <Header />
      <div className="work-main-section" style={{ backgroundImage: `url(http://localhost:8000/${work.images[0].path})` }}>
        <div className="arrow-container">
          <img src={arrowYellow} alt="Drop down" />
        </div>
      </div>
      <div className="work-main-text-container">
        <div className="work-main-text-right">
          <h1 className="main-title">{work.title}</h1>
          <h2 className="main-subtitle">{work.subtitle}</h2>
          <div className="team-list-container">
            <span className="team-list-title">Equipo</span>
            <p>Persona 1 (ejemplo), Persona 2 (Ejemplo), Persona 3(Ejemplo)</p>
          </div>
        </div>
        <div className="work-main-content">
          <p>{work.content}</p>
        </div>
      </div>
      {
        work.sections && work.sections.map(w => {
          return (
            w.view_type == 1 ? <GridImagesSection section={w} /> : <CarouselSection section={w} />
          )
        })
      }
      <div className="work-footer">
        <div className="share-container">
          <a href="" className="share-button">Compartir</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} className="share-button-link">Facebook</a>
          <a href="" className="share-button-link">Instagram</a>
          <a href="" className="share-button-link">Pinterest</a>
        </div>
        <div className="pagination">
          {
            nextId && (
              <Link href={`/works/${nextId}`}>
                <a className="pagination-button">
                  <span>Siguiente</span>
                  <img src={arrowBlack} alt="Next project" />
                </a>
              </Link>
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '3' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const work = await workService.get(params.id);
  const works = await workService.getActiveWorks();
  const currentIndex = works.data.findIndex(w => w.id == params.id);
  return {
    props: {
      work: work.data,
      nextId: works.data.length == currentIndex + 1 ? null : works.data[currentIndex + 1].id
    },
  }
}

export default Work;

