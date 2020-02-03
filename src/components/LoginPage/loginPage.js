import React from 'react';
import PropTypes from 'prop-types';
// import styles from './loginP.module.css';

const loginPage = ({ onClick }) => {
  return (
    <div className="LoginPage">
      <div />
      <div>
        <p> Hi it`s me!</p>
        <button type="button" onClick={onClick}>
          Регистрация
        </button>
      </div>
    </div>
  );
};

loginPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default loginPage;
