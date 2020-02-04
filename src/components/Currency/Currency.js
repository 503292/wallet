import React from 'react';
import css from './Currency.module.css';

const Currency = () => {
  return (
    <div className={css.currencyContainer}>
      <table className={css.currencyTable}>
        <thead className={css.currencyThead}>
          <tr>
            <th className={css.currencyTheadTh}>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
        </thead>
        <tbody className={css.currenceTbodyTh}>
          <tr>
            <th>USD</th>
            <th>24.95</th>
            <th>25.00</th>
          </tr>
          <tr>
            <th>EUR</th>
            <th>26.90</th>
            <th>27.00</th>
          </tr>
          <tr>
            <th>RUB</th>
            <th>0.30</th>
            <th>0.35</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
