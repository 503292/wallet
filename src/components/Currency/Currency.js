import React from 'react';
import css from './Currency.module.css';

const Currency = () => {
  return (
    <div className={css.currencyContainer}>
      <table className={css.currencyTable}>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>24.95</td>
            <td>25.00</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>26.90</td>
            <td>27.00</td>
          </tr>
          <tr>
            <td>RUB</td>
            <td>0.30</td>
            <td>0.35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
