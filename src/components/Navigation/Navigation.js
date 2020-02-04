import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagram } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

// import home from '../../assets/icons/home/baseline-home-24px.svg';
// import diagram from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
// import currency from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import css from './Navigation.module.css';

const ativeStyle = {
  color: 'tomato',
  fill: 'red',
};

const Navigation = () => {
  return (
    <ul className={css.wrapNav}>
      <li>
        <NavLink
          className={css.linkHome}
          to="/home"
          exact
          activeStyle={ativeStyle}
        >
          <Home className={`${css.iconHome} ${css.icons}`} />
          {/* <img className={css.icons} src={home} alt="Главная" /> */}
          {/* <div>Главная</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.linkDiagram}
          to="/diagram"
          exact
          activeStyle={ativeStyle}
        >
          <Diagram className={`${css.iconDiagram} ${css.icons}`} />
          {/* <img className={css.icons} src={diagram} alt="Статистика" /> */}
          {/* <div>Статистика</div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.linkCurrency}
          to="/currency"
          exact
          activeStyle={ativeStyle}
        >
          <Currency className={`${css.iconCurrency} ${css.icons}`} />
          {/* <img className={css.icons} src={currency} alt="Курс" /> */}
          {/* <div>Баланс</div> */}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
