import React from 'react';

import css from './Balance.module.css';

const Balance = () => (
  <div className={css.wrapBalance}>
    <p className={css.balace}>Баланс</p>
    <p className={css.pcs}>24000</p>
  </div>
);

export default Balance;
