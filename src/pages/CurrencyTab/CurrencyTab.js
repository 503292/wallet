import React from 'react';

import Currency from '../../components/Currency/Currency';

import css from './CurrencyTab.module.css';

const CurrencyTab = () => (
  <div className={css.wrapCurrency}>
    <Currency />
  </div>
);

export default CurrencyTab;
