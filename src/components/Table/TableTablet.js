/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React from 'react';
import Select from 'react-select';
import moment from 'moment';
import PropTypes from 'prop-types';
import s from './Table.module.css';
import 'moment/locale/ru';

const TableTablet = ({ today }) => {
  // for (i = 2000; i <= 2050; i++) {
  //   const selectYear = { value: 'year', label: i };
  //   console.log('i :', i);
  // }
  const optionsMonth = [
    { value: 'default', label: today.month },
    { value: 'январь', label: 'январь' },
    { value: 'февраль', label: 'февраль' },
    { value: 'март', label: 'март' },
    { value: 'апрель', label: 'апрель' },
    { value: 'май', label: 'май' },
    { value: 'июнь', label: 'июнь' },
    { value: 'июль', label: 'июль' },
    { value: 'август', label: 'август' },
    { value: 'сентябрь', label: 'сентябрь' },
    { value: 'октябрь', label: 'октябрь' },
    { value: 'ноябрь', label: 'ноябрь' },
    { value: 'декабрь', label: 'декабрь' },
  ];
  const optionsYear = [{ value: 'year', label: today.year }];
  moment.locale('ru');

  const data = [
    {
      value: 1235,
      backgroundColor: '#ecb22a',
      labels: 'Основные расходы',
    },
    { value: 5687, backgroundColor: '#e28b20', labels: 'Продукты' },
    { value: 4788, backgroundColor: '#d25925', labels: 'Машина' },
    { value: 3200, backgroundColor: '#67b7d0', labels: 'Забота о себе' },
    { value: 2500, backgroundColor: '#5593d7', labels: 'Забота о детях' },
    {
      value: 4587,
      backgroundColor: '#3e6ba8',
      labels: 'Товары для дома',
    },
    { value: 6587, backgroundColor: '#9cc254', labels: 'Образование' },
    { value: 1561, backgroundColor: '#73ad57', labels: 'Досуг' },
    { value: 5618, backgroundColor: '#507c3a', labels: 'Другие расходы' },
  ];

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
      <ul className={s.table_main}>
        <li className={s.table_thead}>
          <p className={s.headerCell_category}>Категория</p>
          <p className={s.headerCell_amount}>Сумма</p>
        </li>
        {data.map(el => (
          <li className={s.table_tr}>
            <p className={s.dataCell_category}>{el.labels}</p>
            <p className={s.dataCell_amount}>{el.value}</p>
          </li>
        ))}
      </ul>
      <div className={s.bottom_div}>
        <div className={s.table_tr_bottom}>
          <p className={s.dataCell_expenses}>Расходы:</p>
          <p className={s.dataCell_expenses_amount}>745</p>
        </div>
        <div className={s.table_tr_bottom}>
          <p className={s.dataCell_income}>Доходы:</p>
          <p className={s.dataCell_income_amount}>745</p>
        </div>
      </div>
    </div>
  );
};

export default TableTablet;
