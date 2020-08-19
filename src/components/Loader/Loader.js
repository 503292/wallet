import React, { Component } from 'react';
import { WaveSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';

import css from './Loader.module.css';

class Loader extends Component {
  state = {};

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div className={css.spinnerWrap}>
        <WaveSpinner size={30} color="#686769" loading={isLoading} />
      </div>
    );
  }
}

export default Loader;
