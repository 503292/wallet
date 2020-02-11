import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagram } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency exchange/baseline-attach_money-24px.svg';

import * as financeSelectors from '../../redux/finance/financeSelectors';
import css from './Navigation.module.css';

const Navigation = ({ balance }) => {
  const widthDevice = window.screen.width;
  return (
    <div className={css.wrapNav}>
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
      <NavLink
        className={css.linkDiagram}
        to="/diagram"
        activeClassName={css.selected}
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

        {widthDevice >= 768 && widthDevice <= 1279 && (
          <div className={css.wrapIcon}>
            <Currency
              className={`${css.iconCurrency} ${css.icons} ${css.notActive}`}
            />
            <div className={css.descr}>{balance}.00 грн</div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  balance: financeSelectors.getFinanceTotalBalance(state),
});

Navigation.defaultProps = {
  balance: 0,
};

Navigation.propTypes = {
  balance: PropTypes.number,
};

export default connect(mapStateToProps)(Navigation);
