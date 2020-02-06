import React from 'react';
import css from './HomeTab.module.css';

const MobileHomeTab = () => {
  return (
    <section className={css.homeTabContainer}>
      <table className={css.homeTabTable}>
        <tbody>
          <tr>
            <td>Дата</td>
            <td>03.02.2020</td>
          </tr>
          <tr>
            <td>Тип</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Категория</td>
            <td>Регулярный доход</td>
          </tr>
          <tr>
            <td>Коментарий</td>
            <td>Бонус за январь</td>
          </tr>
          <tr>
            <td>Сумма</td>
            <td>1100</td>
          </tr>
          <tr>
            <td>Баланс</td>
            <td>1100</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Дата</td>
            <td>03.02.2020</td>
          </tr>
          <tr>
            <td>Тип</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Категория</td>
            <td>Регулярный доход</td>
          </tr>
          <tr>
            <td>Коментарий</td>
            <td>Бонус за январь</td>
          </tr>
          <tr>
            <td>Сумма</td>
            <td>1100</td>
          </tr>
          <tr>
            <td>Баланс</td>
            <td>1100</td>
          </tr>
        </tbody>
      </table>

      <button type="button" className={css.homeTabButton}>
        +
      </button>
    </section>
  );
};

export default MobileHomeTab;
