import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../assets/icons/home/baseline-home-24px.svg';
import diagram from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import currency from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import css from './Navigation.module.css';

const ativeStyle = {
  color: 'rgba(0, 0, 0, .3)',
};

const Navigation = () => {
  return (
    <ul className={css.wrapNav}>
      <li>
        <NavLink className={css.link} to="/home" exact activeStyle={ativeStyle}>
          <img className={css.icons} src={home} alt="Главная" />
          {/* <div>Главная</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.link}
          to="/diagram"
          exact
          activeStyle={ativeStyle}
        >
          <img className={css.icons} src={diagram} alt="Статистика" />
          {/* <div>Статистика</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.link}
          to="/currency"
          exact
          activeStyle={ativeStyle}
        >
          <img className={css.icons} src={currency} alt="Курс" />
          {/* <div>Курс</div> */}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
