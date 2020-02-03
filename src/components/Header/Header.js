import React from 'react';

import logo from '../../assets/icons/logo.svg';
import logoOut from '../../assets/icons/logout/exit.svg';

import css from './Header.module.css';

const Header = () => (
  <div className={css.wrapHeader}>
    <div className={css.logoWrap}>
      <img className={css.logo} src={logo} alt="logo" width="20" height="20" />
      <div className={css.logoText}>Wallet</div>
    </div>
    <div className={css.logOutWrap}>
      <div className={css.name}>Имя</div>
      <img
        className={css.logoOut}
        src={logoOut}
        alt="logo"
        width="20"
        height="20"
      />
    </div>
  </div>
);

export default Header;
