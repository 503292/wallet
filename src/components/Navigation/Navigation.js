import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const ativeStyle = {
  color: 'rgba(0, 0, 0, .3)',
};

const Navigation = () => {
  return (
    <ul className={css.wrapNav}>
      <li>
        <NavLink className={css.link} to="/home" exact activeStyle={ativeStyle}>
          {/* <img src="../../assets/" alt="Главная" /> */}
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.link}
          to="/diagram"
          exact
          activeStyle={ativeStyle}
        >
          Статистика
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
