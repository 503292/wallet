import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import shortid from 'shortid';
import styles from './registP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import registerPhoto from '../../assets/photos/registerPhoto.png';
import * as sessionOperations from '../../redux/session/sessionOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import 'react-toastify/dist/ReactToastify.css';
import LockPng from '../../assets/icons/account/lock.png';
import EmailPng from '../../assets/icons/account/email.png';
import UserPng from '../../assets/icons/account/account.png';

class registrationPage extends Component {
  state = {};

  inputIds = {
    email: shortid.generate(),
    password: shortid.generate(),
    confirmPassword: shortid.generate(),
    name: shortid.generate(),
  };

  render() {
    const devicewidth = document.documentElement.clientWidth;
    const tablewidth = 1023;

    return (
      <main className={styles.RegisterPage}>
        <ToastContainer />
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
          <Formik
            initialValues={{
              email: '',
              password: '',
              passConfirm: '',
              name: '',
            }}
            onSubmit={async values => {
              const { onRegister } = this.props;
              await new Promise(resolve => setTimeout(resolve, 500));
              onRegister({ ...values });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
              password: Yup.string()
                .min(7)
                .required('Required'),
              passConfirm: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match',
              ),
              name: Yup.string().required(),
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form className={styles.RegisterForm} onSubmit={handleSubmit}>
                  <label htmlFor={this.inputIds.email} className={styles.label}>
                    <img className={styles.ImgStyles} alt="" src={EmailPng} />
                    <input
                      id={this.inputIds.email}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="E-mail"
                      name="email"
                      className={
                        errors.email && touched.email
                          ? 'text-input' && styles.error
                          : 'text-input'
                      }
                    />
                  </label>
                  {errors.email && touched.email && (
                    <div className={styles.inputFeedback1}>{errors.email}</div>
                  )}
                  <label
                    htmlFor={this.inputIds.password}
                    className={styles.label}
                  >
                    <img className={styles.ImgStyles} alt="" src={LockPng} />
                    <input
                      id={this.inputIds.password}
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Пароль"
                      name="password"
                      className={
                        errors.password && touched.password
                          ? 'text-input' && styles.error
                          : 'text-input'
                      }
                    />
                  </label>
                  {errors.password && touched.password && (
                    <div className={styles.inputFeedback2}>
                      {errors.password}
                    </div>
                  )}
                  <label
                    htmlFor={this.inputIds.confirmPassword}
                    className={styles.label}
                  >
                    <img className={styles.ImgStyles} alt="" src={LockPng} />
                    <input
                      id={this.inputIds.confirmPassword}
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passConfirm}
                      placeholder="Подтвердите пароль"
                      name="passConfirm"
                      className={
                        errors.passConfirm && touched.passConfirm
                          ? 'text-input error'
                          : 'text-input'
                      }
                    />
                  </label>
                  {errors.passConfirm && touched.passConfirm && (
                    <div className={styles.inputFeedback3}>
                      {errors.passConfirm}
                    </div>
                  )}
                  <label htmlFor={this.inputIds.name} className={styles.label}>
                    <img className={styles.ImgStyles} alt="" src={UserPng} />
                    <input
                      id={this.inputIds.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      value={values.name}
                      type="text"
                      placeholder="Ваше имя"
                      className={
                        errors.name && touched.name
                          ? 'text-input' && styles.error
                          : 'text-input'
                      }
                    />
                  </label>
                  {errors.name && touched.name && (
                    <div className={styles.inputFeedback4}>{errors.name}</div>
                  )}
                  <button
                    disabled={isSubmitting}
                    className={styles.formButton}
                    type="submit"
                  >
                    Регистрация
                  </button>
                </form>
              );
            }}
          </Formik>
          <Link className={styles.registrationLink} to="./login">
            Войти
          </Link>
        </section>
      </main>
    );
  }
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
