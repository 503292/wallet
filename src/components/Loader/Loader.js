import React, { Component } from 'react';
import { WaveSpinner } from 'react-spinners-kit';

import css from './Loader.module.css';

class Loader extends Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;
    return (
      <div className={css.spinner}>
        <WaveSpinner size={30} color="#686769" loading={loading} />
      </div>
    );
  }
}

export default Loader;
