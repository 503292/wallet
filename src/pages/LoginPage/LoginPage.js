import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './loginP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
// import { ReactComponent as MailIcon } from '../../assets/icons/e-mail/baseline-email-24px.svg';
// import { ReactComponent as PasswordIcon } from '../../assets/icons/lock/baseline-lock-24px.svg';
import photoTel from '../../assets/photos/loginPhoto.png';
import * as sessionOperations from '../../redux/session/sessionOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class loginPage extends Component {
  state = {};

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
            {/* <MailIcon className={styles.MailIcon} />
            <PasswordIcon className={styles.PasswordIcon} /> */}
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
                  <input
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '17px',
                      paddingLeft: '54px',
                    }}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.email && touched.email
                    //     ? 'text-input' && styles.error
                    //     : 'text-input'
                    // }
                  />
                  {errors.email && touched.email && (
                    <div className={styles.inputFeedback1}>{errors.email}</div>
                  )}
                  <input
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '17px',
                      paddingLeft: '54px',
                    }}
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.password && touched.password
                    //     ? `text-input ${styles.error}`
                    //     : 'text-input'
                    // }
                  />
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
