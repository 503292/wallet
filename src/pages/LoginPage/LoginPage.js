import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import styles from './loginP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import photoTel from '../../assets/photos/loginPhoto.png';
import * as sessionOperations from '../../redux/session/sessionOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import 'react-toastify/dist/ReactToastify.css';
import LockPng from '../../assets/icons/account/lock.png';
import EmailPng from '../../assets/icons/account/email.png';

class loginPage extends Component {
  state = {};

  inputIds = {
    email: shortid.generate(),
    password: shortid.generate(),
  };

  addUser = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const devicewidth = document.documentElement.clientWidth;
    const tablewidth = 1023;

    return (
      <main className={styles.LoginPage}>
        <ToastContainer />
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
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async values => {
              const { onLogin } = this.props;
              await new Promise(resolve => setTimeout(resolve, 500));
              onLogin({ ...values });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
              password: Yup.string()
                .min(7)
                .required('Required'),
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
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                  <label htmlFor={this.inputIds.email} className={styles.label}>
                    <img className={styles.ImgStyles} alt="" src={EmailPng} />
                    <input
                      id={this.inputIds.email}
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="E-mail"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Пароль"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? `text-input ${styles.error}`
                          : 'text-input'
                      }
                    />
                  </label>
                  {errors.password && touched.password && (
                    <div className={styles.inputFeedback2}>
                      {errors.password}
                    </div>
                  )}
                  <button
                    className={styles.formButton}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Войти
                  </button>
                </form>
              );
            }}
          </Formik>
          <Link className={styles.registraationLink} to="/register">
            Регистрация
          </Link>
        </section>
      </main>
    );
  }
}

loginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default withAuthRedirect(connect(null, mapDispatchToProps)(loginPage));
