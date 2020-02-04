import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import styles from './loginP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const loginPage = ({ onClick }) => {
  // const [users, setUser] = useState([]);

  const user = yup.object().shape({
    email: yup.string().required(),
    pass: yup.string().required(),
  });

  const addUser = e => {
    e.preventDefault();
    // console.log(user);
  };

  return (
    <div className="LoginPage">
      <div />
      <div className={styles.loginDiv}>
        <Logo className={styles.logo} />
        <h1 className={styles.head}> Wallet</h1>
        <form className={styles.loginForm} onSubmit={addUser}>
          <input type="text" value={user.email} placeholder="E-mail" />
          <input type="text" value={user.pass} placeholder="Пароль" />
          <button className={styles.formButton} type="submit">
            Войти
          </button>
        </form>
        <button
          className={styles.registraationButt}
          type="button"
          onClick={onClick}
        >
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
