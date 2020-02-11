import React from 'react';
import Currency from '../../components/Currency/Currency';
import HomeTab from '../../components/HomeTab/HomeTab.Container';

const widthDevice = window.screen.width;

const HomeTabPage = () => {
  return (
    <>
      <HomeTab />
      {widthDevice > 767 && widthDevice < 1279 && <Currency />}
    </>
  );
};

export default HomeTabPage;
