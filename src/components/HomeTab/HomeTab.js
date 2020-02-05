import React from 'react';
import MobileHomeTab from './MobileHomeTab';
import css from './HomeTab.module.css';

const widthDevice = window.screen.width;

const HomeTab = () => {
  return (
    <>
      {widthDevice < 768 && <MobileHomeTab />}

      {widthDevice >= 768 && (
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
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04.02.2020</td>
                <td>-</td>
                <td>Разное</td>
                <td>Подарок жене</td>
                <td>300</td>
                <td>800</td>
                <td>
                  <button type="button">удалить</button>
                </td>
              </tr>
              <tr>
                <td>03.02.2020</td>
                <td>+</td>
                <td>Регулярный доход</td>
                <td>Бонус за январь</td>
                <td>1100</td>
                <td>1100</td>
                <td>
                  <button type="button">удалить</button>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="button" className={css.homeTabButton}>
            +
          </button>
        </section>
      )}
    </>
  );
};

export default HomeTab;
