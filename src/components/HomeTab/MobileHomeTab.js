import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import moment from 'moment';
import css from './HomeTab.module.css';

const MobileHomeTab = ({ modalAddTransactionOpen, data }) => {
  return (
    <section className={css.homeTabContainer}>
      {data.length === 0 && (
        <span className={css.spanHello}>Привет))) Введи данные транзакций</span>
      )}
      <table className={css.homeTabTable}>
        {data.length > 0 &&
          data.map(elem => (
            <tbody
              className={css.homeTabTable_tbodyMobile}
              key={shortid.generate()}
            >
              <tr>
                <td>Дата</td>
                <td>{moment(elem.data).format('DD.MM.YYYY')}</td>
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
                {elem.type === '-' && (
                  <td style={{ color: '#ff6c00' }}>{elem.amount}</td>
                )}
                {elem.type === '+' && (
                  <td style={{ color: '#284060' }}>{elem.amount}</td>
                )}
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

MobileHomeTab.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  modalAddTransactionOpen: PropTypes.func.isRequired,
};
