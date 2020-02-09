import React, { Component } from 'react';
import { WaveSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';

import css from './Loader.module.css';

class Loader extends Component {
  state = {
    // loading: true,
  };

  static propTypes = {
    isLoading: PropTypes.string.isRequired,
  };

  render() {
    // const { loading } = this.state;
    const { isLoading } = this.props;
    return (
      <div className={css.spinner}>
        <WaveSpinner size={30} color="#686769" loading={isLoading} />
      </div>
    );
  }
}

export default Loader;
