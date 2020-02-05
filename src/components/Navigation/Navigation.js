import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagram } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import css from './Navigation.module.css';

const activeStyle = {
  backgroundColor: '#415b7d',
};

const Navigation = () => {
  const widthDevice = window.screen.width;
  return (
    <div className={css.wrapNav}>
      <NavLink
        className={css.linkHome}
        to="/home"
        exact
        activeClassName={css.selected}
        activeStyle={activeStyle}
      >
        <div className={css.wrapIcon}>
          <Home className={`${css.iconHome} ${css.icons}`} />
          {widthDevice >= 768 && <div className={css.descr}>Главная</div>}
        </div>
      </NavLink>
      <NavLink
        className={css.linkDiagram}
        to="/diagram"
        activeClassName={css.selected}
        activeStyle={activeStyle}
      >
        <div className={css.wrapIcon}>
          <Diagram className={`${css.iconDiagram} ${css.icons}`} />
          {widthDevice >= 768 && <div className={css.descr}>Статистика</div>}
        </div>
      </NavLink>

      <NavLink
        className={widthDevice < 768 ? css.linkCurrency : css.notActive}
        to="/currency"
        activeClassName={css.selected}
      >
        {widthDevice < 768 && (
          <Currency className={`${css.iconCurrency} ${css.icons}`} />
        )}

        {widthDevice >= 768 && widthDevice <= 1023 && (
          <div className={css.wrapIcon}>
            <Currency
              className={`${css.iconCurrency} ${css.icons} ${css.notActive}`}
            />
            <div className={css.descr}>Баланс: 24 000.00грн</div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Navigation;
