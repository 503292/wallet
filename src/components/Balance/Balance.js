import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as financeSelectors from '../../redux/finance/financeSelectors';

import css from './Balance.module.css';

const Balance = ({ balance }) => {
  return (
    <div className={css.wrapBalance}>
      <p className={css.balance}>Баланс</p>
      <p className={css.pcs}>{balance}.00 грн</p>
    </div>
  );
};

const mapStateToProps = state => ({
  balance: financeSelectors.getFinanceTotalBalance(state),
});

Balance.defaultProps = {
  balance: 0,
};

Balance.propTypes = {
  balance: PropTypes.number,
};

export default connect(mapStateToProps)(Balance);
