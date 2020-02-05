import React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './registP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import registerPhoto from '../../assets/photos/registerPhoto.png';

const registrationPage = () => {
  const devicewidth = document.documentElement.clientWidth;
  const tablewidth = 1023;

  const user = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required(),
    pass: yup
      .string()
      .email('Invalid pass')
      .required(),
    passConfirm: yup
      .string()
      .email('Passwords do not match')
      .required(),
    name: yup
      .string()
      .email('Please enter your name')
      .required(),
  });

  const addUser = e => {
    e.preventDefault();
    // console.log(user);
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
          <input type="text" value={user.email} placeholder="E-mail" />
          <input type="text" value={user.pass} placeholder="Пароль" />
          <input
            type="text"
            value={user.passConfirm}
            placeholder="Подтвердите пароль"
          />
          <input type="text" value={user.name} placeholder="Ваше имя" />
          <button className={styles.formButton} type="submit">
            Регистрация
          </button>
        </form>
        <Link className={styles.registrationLink} to="./login">
          Войти
        </Link>
      </section>
    </main>
  );
};

export default registrationPage;
