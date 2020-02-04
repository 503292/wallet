import React from 'react';
import { NavLink } from 'react-router-dom';

// import logo from '../../assets/icons/logo.svg';
// import logoOut from '../../assets/icons/logout/exit.svg';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogOut } from '../../assets/icons/logout/exit.svg';

import css from './Header.module.css';

const Header = () => (
  <div className={css.wrapHeader}>
    <NavLink className={css.logoWrap} to="/home" exact>
      {/* <img className={css.logo} src={logo} alt="logo" width="20" height="20" /> */}
      <Logo className={css.logo} />
      <div className={css.logoText}>Wallet</div>
    </NavLink>
    <div className={css.logOutWrap}>
      <div className={css.name}>Имя</div>
      {/* <img
        className={css.logoOut}
        src={logoOut}
        alt="logo"
        width="20"
        height="20"
      /> */}
      <LogOut className={css.logoOut} />
    </div>
  </div>
);

export default Header;
