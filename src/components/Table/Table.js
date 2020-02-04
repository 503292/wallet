import React from 'react';
import Select from 'react-select';
import s from './Table.module.css';

const Table = () => {
  const optionsMonth = [{ value: 'month', label: 'месяц' }];
  const optionsYear = [{ value: 'year', label: 'год' }];
  return (
    <div className={s.table_main_div}>
      <div className={s.select_table}>
        <Select
          options={optionsMonth}
          className={s.select_options}
          defaultValue={optionsMonth[0]}
        />
        <Select
          options={optionsYear}
          className={s.select_options}
          defaultValue={optionsYear[0]}
        />
      </div>
      <table className={s.table_main}>
        <thead className={s.table_thead}>
          <tr className={s.table_tr}>
            <th className={s.headerCell_category}>Категория</th>
            <th className={s.headerCell_amount}>Сумма</th>
          </tr>
        </thead>
        <tbody className={s.table_tbody}>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Основные расходы</td>
            <td className={s.dataCell_amount}>123</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Продукты</td>
            <td className={s.dataCell_amount}>123</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Машина</td>
            <td className={s.dataCell_amount}>2358</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Забота о себе</td>
            <td className={s.dataCell_amount}>785</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Забота о детях</td>
            <td className={s.dataCell_amount}>0</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Товары для дома</td>
            <td className={s.dataCell_amount}>7123</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Образование</td>
            <td className={s.dataCell_amount}>34203</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Досуг</td>
            <td className={s.dataCell_amount}>2033</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_category}>Другие расходы</td>
            <td className={s.dataCell_amount}>715</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_expenses}>Расходы:</td>
            <td className={s.dataCell_expenses_amount}>7150</td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_income}>Доходы:</td>
            <td className={s.dataCell_income_amount}>7150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
