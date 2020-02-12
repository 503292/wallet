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
// import loginChecker from './LoginChecker';

// const user = yup.object().shape({
//   email: yup.string().required(),
//   pass: yup.string().required(),
// });
class loginPage extends Component {
  state = {
    email: '',
    password: '',
    disabled: true,
    errors: {},
  };

  addUser = e => {
    e.preventDefault();
    // console.log(user);
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { errors } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });

    // if (!email) {
    //   this.setState({
    //      errors.email = 'Required',
    //   })
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    //   this.setState({
    //     errors.email = 'Invalid email address'
    //   })

    // }

    // if (!password) {
    //   this.setState({
    //   errors.password = 'Required'
    //   })
    // } else if (password.length < 7) {
    //   this.setState({
    //   errors.password = 'Password should be at least 7 characters long'
    //     })
    // }
    return errors;
  };

  render() {
    const devicewidth = document.documentElement.clientWidth;
    const tablewidth = 1023;
    const { email, password } = this.state;
    // console.log(email, password);
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
            {/* {errors.email && <p>{errors.email}</p>} */}

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={this.handleChange}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}

            <button
              // disabled={disabled}
              className={styles.formButton}
              type="submit"
            >
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
