import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionActions from '../../redux/session/sessionActions';
import * as sessionSelectors from '../../redux/session/sessionSelectors';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogOut } from '../../assets/icons/logout/exit.svg';

import css from './Header.module.css';

const Header = ({ name, onLogOut }) => (
  <div className={css.wrapHeader}>
    <NavLink className={css.logoWrap} to="/home" exact>
      <Logo className={css.logo} />
      <div className={css.logoText}>Wallet</div>
    </NavLink>
    <div className={css.logOutWrap}>
      <div className={css.name}>{name}</div>
      <button className={css.btnOut} type="submit" onClick={onLogOut}>
        <LogOut className={css.logoOut} />
      </button>
    </div>
  </div>
);

Header.defaultProps = {
  name: '',
};

Header.propTypes = {
  name: PropTypes.string,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: sessionSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: sessionActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
