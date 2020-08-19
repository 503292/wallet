import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import moment from 'moment';
import MobileHomeTab from './MobileHomeTab';
import ModalAdd from '../ModalAdd/ModalAddContainer';
import css from './HomeTab.module.css';

const widthDevice = window.screen.width;

class HomeTab extends Component {
  state = {};

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    modalAddTransactionOpen: PropTypes.func.isRequired,
  };

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
          <h2 className={css.titleHello}>Привет))) Введи данные транзакций</h2>
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
                    <td>{moment(elem.data).format('DD.MM.YYYY')}</td>
                    <td>{elem.type}</td>
                    <td>{elem.category}</td>
                    <td>{elem.comments}</td>
                    {elem.type === '-' && (
                      <td style={{ color: '#ff6c00' }}>{elem.amount}</td>
                    )}
                    {elem.type === '+' && (
                      <td style={{ color: '#284060' }}>{elem.amount}</td>
                    )}
                    <td>{elem.balanceAfter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        <button
          type="button"
          className={css.homeTabButton}
          onClick={modalAddTransactionOpen}
        >
          +
        </button>
        <ModalAdd />
      </>
    );
  }
}

export default HomeTab;
