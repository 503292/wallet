import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as sessionSelectors from '../../redux/session/sessionSelectors';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogOut } from '../../assets/icons/logout/exit.svg';

import css from './Header.module.css';

const Header = ({ name }) => (
  <div className={css.wrapHeader}>
    <NavLink className={css.logoWrap} to="/home" exact>
      <Logo className={css.logo} />
      <div className={css.logoText}>Wallet</div>
    </NavLink>
    <div className={css.logOutWrap}>
      <div className={css.name}>{name}</div>
      <LogOut className={css.logoOut} />
    </div>
  </div>
);

Header.defaultProps = {
  name: '',
};

Header.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  name: sessionSelectors.getUserName(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
