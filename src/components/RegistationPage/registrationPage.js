import React from 'react';
import PropTypes from 'prop-types';
// import styles from './registP.module.css';

const registrationPage = ({ onClick }) => {
  return (
    <div className="RegistrationPage">
      <div />
      <div>
        <p> Hi it`s registration!</p>
        <button type="button" onClick={onClick}>
          Войти
        </button>
      </div>
    </div>
  );
};

registrationPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default registrationPage;
