import React from 'react';
// import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './registP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import registerPhoto from '../../assets/photos/registerPhoto.png';
import ValidationForm from './validationForm';
import AuthorizationChecker from './authorizationChecker';
import * as sessionOperations from '../../redux/session/sessionOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';

// import * as sessionOperations from '../../redux/session/sessionOperations';

const INITIAL_STATE = {
  email: '',
  password: '',
  passConfirm: '',
  name: '',
};

function registrationPage({ onRegister }) {
  const {
    values,
    handleChange,
    onBlur,
    errors,
    isSubmiting,
    firebaseError,
  } = ValidationForm(INITIAL_STATE, AuthorizationChecker);
  const devicewidth = document.documentElement.clientWidth;
  const tablewidth = 1023;
  const addUser = e => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <main className={styles.RegisterPage}>
      <section className={styles.desktopEl}>
        {devicewidth > tablewidth && (
          <div className={styles.desktopElements}>
            <img
              width="299"
              height="599"
              alt="Welcome to Wallet"
              src={registerPhoto}
            />
            <p className={styles.financeHeadline}>Finance App </p>
          </div>
        )}
      </section>
      <section className={styles.RegisterDiv}>
        <article className={styles.divForLogo}>
          <Logo className={styles.logo} />
          <h1 className={styles.head}> Wallet</h1>
        </article>
        <form className={styles.RegisterForm} onSubmit={addUser}>
          <input
            type="text"
            onChange={handleChange}
            onBlur={onBlur}
            value={values.email}
            placeholder="E-mail"
            name="email"
          />
          {errors.email && (
            <p className={styles.inputFeedback1}>{errors.email}</p>
          )}
          <input
            type="password"
            onChange={handleChange}
            onBlur={onBlur}
            value={values.password}
            placeholder="Пароль"
            name="password"
          />
          {errors.password && (
            <p className={styles.inputFeedback2}>{errors.password}</p>
          )}
          <input
            type="password"
            onChange={handleChange}
            onBlur={onBlur}
            value={values.passConfirm}
            placeholder="Подтвердите пароль"
            name="passConfirm"
          />
          {errors.passConfirm && (
            <p className={styles.inputFeedback3}>{errors.passConfirm}</p>
          )}
          <input
            onChange={handleChange}
            onBlur={onBlur}
            name="name"
            value={values.name}
            type="text"
            placeholder="Ваше имя"
          />
          {errors.name && (
            <p className={styles.inputFeedback4}>{errors.name}</p>
          )}
          {firebaseError && <p>User with this E-mail is already exist</p>}

          <button
            disabled={isSubmiting}
            className={styles.formButton}
            type="submit"
          >
            Регистрация
          </button>
        </form>
        <Link className={styles.registrationLink} to="./login">
          Войти
        </Link>
      </section>
    </main>
  );
}

registrationPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: sessionOperations.registration,
};

export default withAuthRedirect(
  connect(null, mapDispatchToProps)(registrationPage),
);
