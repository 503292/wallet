import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagram } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={css.wrapNav}>
      <li>
        <NavLink
          className={css.linkHome}
          to="/home"
          exact
          activeClassName={css.selected}
        >
          <Home className={`${css.iconHome} ${css.icons}`} />

          {/* <div>Главная</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.linkDiagram}
          to="/diagram"
          exact
          activeClassName={css.selected}
          // activeStyle={ativeStyle}
        >
          <Diagram className={`${css.iconDiagram} ${css.icons}`} />
          {/* <div>Статистика</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.linkCurrency}
          to="/currency"
          exact
          activeClassName={css.selected}
          // activeStyle={ativeStyle}
        >
          <Currency className={`${css.iconCurrency} ${css.icons}`} />
          {/* <div>Баланс</div> */}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
