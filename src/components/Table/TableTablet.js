/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React from 'react';
import Select from 'react-select';
import s from './Table.module.css';

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

  // console.log(data.map(el => el.value));
  // console.log(data.map(el => el.labels));

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
            <th className={s.headerCell_category} width="75%">
              Категория
            </th>
            <th className={s.headerCell_amount} width="25%">
              Сумма
            </th>
          </tr>
        </thead>
        <tbody className={s.table_tbody}>
          {data.map(el => (
            <tr className={s.table_tr} key={el.backgroundColor}>
              <td className={s.dataCell_category} width="75%">
                {/* <div className={s.color_block} /> */}
                {el.labels}
              </td>
              <td className={s.dataCell_amount} width="25%">
                {el.value}
              </td>
            </tr>
          ))}
          <tr className={s.table_tr}>
            <td className={s.dataCell_expenses} width="75%">
              Расходы:
            </td>
            <td className={s.dataCell_expenses_amount} width="25%">
              7150
            </td>
          </tr>
          <tr className={s.table_tr}>
            <td className={s.dataCell_income} width="75%">
              Доходы:
            </td>
            <td className={s.dataCell_income_amount} width="25%">
              7150
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTablet;
