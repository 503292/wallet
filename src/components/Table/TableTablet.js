/* eslint-disable */
import React from 'react';
import Select from 'react-select';
// import PropTypes from 'prop-types';
import s from './Table.module.css';

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
            <div className={s.table_inner_txt}>
              <p className={s.dataCell_category}>{el.category}</p>
              <p className={s.dataCell_amount}>{el.totalAmount}</p>
            </div>
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
