import React from 'react';

import css from './Balance.module.css';

const Balance = () => (
  <div className={css.wrapBalance}>
    <p className={css.balance}>Баланс</p>
    <p className={css.pcs}>24 000.00 грн</p>
  </div>
);

export default Balance;
