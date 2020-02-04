import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagram } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import css from './Navigation.module.css';

const Navigation = () => {
  const widthDevice = window.screen.width;

  // console.log(, 'window.screen.width');
  return (
    <ul className={css.wrapNav}>
      <li>
        <NavLink
          className={css.linkHome}
          to="/home"
          exact
          activeClassName={css.selected}
        >
          <div className={css.wrapIcon}>
            <Home className={`${css.iconHome} ${css.icons}`} />
            {widthDevice >= 768 && <div className={css.descr}>Главная</div>}
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.linkDiagram}
          to="/diagram"
          exact
          activeClassName={css.selected}
        >
          <div className={css.wrapIcon}>
            <Diagram className={`${css.iconDiagram} ${css.icons}`} />
            {widthDevice >= 768 && <div className={css.descr}>Статистика</div>}
          </div>
        </NavLink>
      </li>
      {widthDevice <= 1023 && (
        <li>
          <NavLink
            className={css.linkCurrency}
            to="/currency"
            exact
            activeClassName={css.selected}
          >
            <div className={css.wrapIcon}>
              <Currency className={`${css.iconCurrency} ${css.icons}`} />

              {widthDevice >= 768 && (
                <div className={css.descr}>Баланс: 24 000.00грн</div>
              )}
            </div>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
