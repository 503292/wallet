/* eslint-disable  */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';
import s from './DiagramTab.module.css';
import Chart from '../../components/Chart/Chart';
import * as financeSelectors from '../../redux/finance/financeSelectors';
import TableTablet from '../../components/Table/TableTablet';
import 'chartjs-plugin-labels';

const DiagramTab = () => {
  const financeData = useSelector(store =>
    financeSelectors.getFinanceData(store),
  );

  console.log(financeData, 'financeData');

  const typePlus = financeData.filter(el => el.type === '+');
  console.log(typePlus, 'typePlus');

  const typeMinus = financeData.filter(el => el.type === '-');

  // функція вертає всі МІНУСОВІ транзакції (фільтрація по Year & Month)
  const filterYearMonth = (month, year) => {
    const tmpYear = [];
    const result = [];
    typeMinus
      .filter(el => {
        const getYear = moment(el.date).format('YYYY');
        if (+getYear === year) {
          tmpYear.push(el);
        }
        return tmpYear;
      })
      .filter(el => {
        const getMonth = moment(el.date).format('MMMM');
        if (getMonth === month) {
          result.push(el);
        }
      });
    console.log(tmpYear, 'tmpYear');
    console.log(result, 'result');
    return result;
  };

  const resultFilter = filterYearMonth('март', 2020);
  console.log(resultFilter, 'resultFilter');

  // Додає всі мінусові витрати за вибраний рік і місяць
  const plusAllMinusTransactions = resultFilter.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );
  console.log(plusAllMinusTransactions, 'plusAllMinusTransactions');

  // Додає всі доходи за весь період (не баг а фічя)
  const plusAllPositiveTransactions = typePlus.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );
  console.log(plusAllPositiveTransactions, 'plusAllPositiveTransactions');

  const todayYear = moment().format('YYYY');
  const todayMonth = moment().format('MMMM');

  const [today] = useState({ month: todayMonth, year: todayYear });
  //   console.log('today :', today);

  const [chartData] = useState({
    labels: [
      'Основные расходы',
      'Продукты',
      'Машина',
      'Забота о себе',
      'Забота о детях',
      'Товары для дома',
      'Образование',
      'Досуг',
      'Другие расходы',
    ],

    options: {
      plugins: {
        labels: {
          render: 'label',
          fontSize: 12,
          fontColor: '#fff',
          textShadow: true,
        },
      },
      legend: {
        display: false,
      },
    },
    datasets: [
      {
        label: 'wallet',
        data: [1235, 5687, 4788, 3200, 2500, 4587, 6587, 1561, 5618],
        backgroundColor: [
          '#ecb22a',
          '#e28b20',
          '#d25925',
          '#67b7d0',
          '#5593d7',
          '#3e6ba8',
          '#9cc254',
          '#73ad57',
          '#507c3a',
        ],
      },
    ],
  });

  return (
    <div>
      <p className={s.statistic_p}>статистика</p>
      <div className={s.diagramTab_main_div}>
        <Chart chartData={chartData} />
        <TableTablet
          today={today}
          labels={chartData.labels}
          value={chartData.datasets.map(el => el.data)}
          color={chartData.datasets.map(el => el.backgroundColor)}
        />
      </div>
    </div>
  );
};

export default DiagramTab;
