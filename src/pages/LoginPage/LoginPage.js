import { connect } from 'react-redux';
import React, { Component } from 'react';
// import * as yup from 'yup';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './loginP.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import photoTel from '../../assets/photos/loginPhoto.png';
import * as sessionOperations from '../../redux/session/sessionOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';

// const user = yup.object().shape({
//   email: yup.string().required(),
//   pass: yup.string().required(),
// });
class loginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  addUser = e => {
    e.preventDefault();
    // console.log(user);
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const devicewidth = document.documentElement.clientWidth;
    const tablewidth = 1023;
    const { email, password } = this.state;
    console.log(email, password);
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
          <form className={styles.loginForm} onSubmit={this.addUser}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={this.handleChange}
            />
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
  }
}

loginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default withAuthRedirect(connect(null, mapDispatchToProps)(loginPage));
