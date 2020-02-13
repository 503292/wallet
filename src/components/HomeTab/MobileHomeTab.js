/* eslint-disable react/prop-types */
import React from 'react';
import shortid from 'shortid';
import css from './HomeTab.module.css';

const MobileHomeTab = ({ modalAddTransactionOpen, data }) => {
  return (
    <section className={css.homeTabContainer}>
      <table className={css.homeTabTable}>
        {data.length === 0 && <h2>Привет))) Введи данные транзакций</h2>}
        {data.length > 0 &&
          data.map(elem => (
            <tbody
              className={css.homeTabTable_tbodyMobile}
              key={shortid.generate()}
            >
              <tr>
                <td>Дата</td>
                <td>{elem.date}</td>
              </tr>
              <tr>
                <td>Тип</td>
                <td>{elem.type}</td>
              </tr>
              <tr>
                <td>Категория</td>
                <td>{elem.category}</td>
              </tr>
              <tr>
                <td>Коментарий</td>
                <td>{elem.comments}</td>
              </tr>
              <tr>
                <td>Сумма</td>
                <td className={css.homeTabTable_amount}>{elem.amount}</td>
              </tr>
              <tr>
                <td>Баланс</td>
                <td>{elem.balanceAfter}</td>
              </tr>
            </tbody>
          ))}
      </table>
      <button
        type="button"
        className={css.homeTabButton}
        onClick={modalAddTransactionOpen}
      >
        +
      </button>
    </section>
  );
};

export default MobileHomeTab;
