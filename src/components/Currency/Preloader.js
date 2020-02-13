import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Preloader = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#3a5374"
      style={loaderStyles}
      height={100}
      width={100}
    />
  );
};

export default Preloader;
