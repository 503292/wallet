import React from 'react';
// import * as yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './registP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import registerPhoto from '../../assets/photos/registerPhoto.png';
import ValidationForm from './validationForm';
import AuthorizationChecker from './authorizationChecker';

const INITIAL_STATE = {
  email: '',
  pass: '',
  passConfirm: '',
  name: '',
};

function registrationPage() {
  const {
    addUser,
    values,
    handleChange,
    onBlur,
    errors,
    isSubmiting,
  } = ValidationForm(INITIAL_STATE, AuthorizationChecker);
  const devicewidth = document.documentElement.clientWidth;
  const tablewidth = 1023;

  // const [firebaseError, setFirebaseError] = useState(null);
  // function authenticateUser() {
  //   const { name, value } = values;
  //   try {
  //     await;
  //   } catch (err) {
  //     console.error('Auth error', err);
  //     setFirebaseError(err);
  //   }
  // }
  // console.log(isSubmiting);
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
            // className={errors.email && styles.errorInput}
            placeholder="E-mail"
            name="email"
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            onChange={handleChange}
            onBlur={onBlur}
            value={values.pass}
            // className={errors.pass && styles.errorInput}
            placeholder="Пароль"
            name="pass"
          />
          {errors.pass && <p>{errors.pass}</p>}
          <input
            type="password"
            onChange={handleChange}
            onBlur={onBlur}
            // className={errors.passConfirm && styles.errorInput}
            value={values.passConfirm}
            placeholder="Подтвердите пароль"
            name="passConfirm"
          />
          {errors.passConfirm && <p>{errors.passConfirm}</p>}
          <input
            onChange={handleChange}
            onBlur={onBlur}
            name="name"
            value={values.name}
            type="text"
            // className={errors.name && styles.errorInput}
            placeholder="Ваше имя"
          />
          {errors.name && <p>{errors.name}</p>}
          {/* {errors.firebaseError && <p>{firebaseError}</p>} */}

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

export default registrationPage;

// const user = yup.object().shape({
//   email: yup
//     .string()
//     .email('Invalid email address')
//     .required(),
//   pass: yup
//     .string()
//     .email('Invalid pass')
//     .required(),
//   passConfirm: yup
//     .string()
//     .email('Passwords do not match')
//     .required(),
//   name: yup
//     .string()
//     .email('Please enter your name')
//     .required(),
// });
