import React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './loginP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import photoTel from '../../assets/photos/loginPhoto.png';

const loginPage = () => {
  // const [users, setUser] = useState([]);
  const devicewidth = document.documentElement.clientWidth;
  const tablewidth = 1023;
  const user = yup.object().shape({
    email: yup.string().required(),
    pass: yup.string().required(),
  });

  const addUser = e => {
    e.preventDefault();
    // console.log(user);
  };

  return (
    <main className={styles.LoginPage}>
      <section className={styles.desktopEl}>
        {devicewidth > tablewidth && (
          <div className={styles.desktopElements}>
            <img
              width="299"
              height="599"
              alt="Welcome to Wallet"
              src={photoTel}
            />
            <p className={styles.financeHeadline}>Finance App </p>
          </div>
        )}
      </section>
      <section className={styles.loginDiv}>
        <div className={styles.divForLogo}>
          <Logo className={styles.logo} />
          <h1 className={styles.head}> Wallet</h1>
        </div>
        <form className={styles.loginForm} onSubmit={addUser}>
          <input type="text" value={user.email} placeholder="E-mail" />
          <input type="text" value={user.pass} placeholder="Пароль" />
          <button className={styles.formButton} type="submit">
            Войти
          </button>
        </form>
        <Link className={styles.registraationLink} to="/register">
          Регистрация
        </Link>
      </section>
    </main>
  );
};

export default loginPage;
