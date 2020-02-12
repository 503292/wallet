/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React from 'react';
import Select from 'react-select';
import s from './Table.module.css';
import * as dataSource from './dataSource.json';

const TableTablet = () => {
  const optionsMonth = [{ value: 'month', label: 'месяц' }];
  const optionsYear = [{ value: 'year', label: 'год' }];
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

  console.log(dataSource[0].date);

  const dateJson = JSON.stringify(dataSource);
  console.log('dateJson :', dateJson);

  // const mapJson = JSON.parse(dateJson);
  // console.log('mapJson :', mapJson);

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
