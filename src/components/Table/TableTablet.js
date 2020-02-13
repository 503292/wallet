/* eslint-disable */

import React from 'react';
import Select from 'react-select';
import moment from 'moment';
import PropTypes from 'prop-types';
import s from './Table.module.css';
import 'moment/locale/ru';

const TableTablet = ({
  totalMonthExpense,
  totalMonthIncome,
  availableMonths,
  availableYears,
  selectedMonth,
  selectedYear,
  handleChangeMonth,
  handleChangeYear,
  arrDataForTable,
}) => {
  return (
    <div className={s.table_main_div}>
      <div className={s.select_table}>
        <Select
          options={availableMonths}
          className={s.select_options}
          value={selectedMonth}
          onChange={handleChangeMonth}
        />
        <Select
          options={availableYears}
          className={s.select_options}
          value={selectedYear}
          onChange={handleChangeYear}
        />
      </div>
      <ul className={s.table_main}>
        <li className={s.table_thead}>
          <p className={s.headerCell_category}>Категория</p>
          <p className={s.headerCell_amount}>Сумма</p>
        </li>
        {arrDataForTable.map(el => (
          <li key={el.category} className={s.table_tr}>
            <span className={s.color} style={{ backgroundColor: el.color }} />
            <p className={s.dataCell_category}>{el.category}</p>
            <p className={s.dataCell_amount}>{el.totalAmount}</p>
          </li>
        ))}
      </ul>
      <div className={s.bottom_div}>
        <div className={s.table_tr_bottom}>
          <p className={s.dataCell_expenses}>Расходы:</p>
          <p className={s.dataCell_expenses_amount}>{totalMonthExpense}</p>
        </div>
        <div className={s.table_tr_bottom}>
          <p className={s.dataCell_income}>Доходы:</p>
          <p className={s.dataCell_income_amount}>{totalMonthIncome}</p>
        </div>
      </div>
    </div>
  );
};

export default TableTablet;

// const optionsYear = [{ value: 'year', label: today.year }];
// moment.locale('ru');

// const data = [
//   {
//     value: 1235,
//     backgroundColor: '#ecb22a',
//     labels: 'Основные расходы',
//   },
//   { value: 5687, backgroundColor: '#e28b20', labels: 'Продукты' },
//   { value: 4788, backgroundColor: '#d25925', labels: 'Машина' },
//   { value: 3200, backgroundColor: '#67b7d0', labels: 'Забота о себе' },
//   { value: 2500, backgroundColor: '#5593d7', labels: 'Забота о детях' },
//   {
//     value: 4587,
//     backgroundColor: '#3e6ba8',
//     labels: 'Товары для дома',
//   },
//   { value: 6587, backgroundColor: '#9cc254', labels: 'Образование' },
//   { value: 1561, backgroundColor: '#73ad57', labels: 'Досуг' },
//   { value: 5618, backgroundColor: '#507c3a', labels: 'Другие расходы' },
// ];
