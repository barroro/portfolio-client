import React, { useEffect } from 'react';
import Head from 'next/head';

import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../redux/store/actions/CategoryActions';
import Footer from '../components/footer';
import CategoryTabs from '../components/category-tabs';
import Header from '../components/header';
import WorksPreview from '../components/works-preview';

export default function Index() {
  const handleClickTab = (category) => {
    console.log(category)
  }
  return (
    <div className="main-page">
      <Head>
        <title>Laura Solano | Graphic Designer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <CategoryTabs onChangeTab={handleClickTab} />
      <WorksPreview />
      <Footer />
    </div>
  );
}
