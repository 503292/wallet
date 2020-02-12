/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import shortid from 'shortid';
import MobileHomeTab from './MobileHomeTab';
import ModalAdd from '../ModalAdd/ModalAddContainer';
import css from './HomeTab.module.css';

const widthDevice = window.screen.width;

class HomeTab extends Component {
  state = {};

  render() {
    const { data, modalAddTransactionOpen } = this.props;
    return (
      <>
        {widthDevice < 768 && (
          <MobileHomeTab
            modalAddTransactionOpen={modalAddTransactionOpen}
            data={data}
          />
        )}
        {widthDevice >= 768 && data.length === 0 && (
          <h2>Привет))) Введи данные транзакций</h2>
        )}
        {widthDevice >= 768 && data.length > 0 && (
          <section className={css.homeTabContainer}>
            <table className={css.homeTabTable}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Тип</th>
                  <th>Категория</th>
                  <th>Коментарий</th>
                  <th>Сумма</th>
                  <th>Баланс</th>
                </tr>
              </thead>
              <tbody>
                {data.map(elem => (
                  <tr key={shortid.generate()} className={css.homeTabTable_tr}>
                    <td>{elem.date}</td>
                    <td>{elem.type}</td>
                    <td>{elem.category}</td>
                    <td>{elem.comments}</td>
                    <td className={css.homeTabTable_amount}>{elem.amount}</td>
                    <td>{elem.balanceAfter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className={css.homeTabButton}
              onClick={modalAddTransactionOpen}
            >
              +
            </button>
          </section>
        )}
        <ModalAdd />
      </>
    );
  }
}

export default HomeTab;
