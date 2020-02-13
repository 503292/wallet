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

  const typePlus = financeData.filter(el => el.type === '+');
  const typeMinus = financeData.filter(el => el.type === '-');

  // функція вертає всі МІНУСОВІ транзакції (фільтрація по Year & Month)
  const filterYearMonth = (month, year, mark) => {
    const tmpYear = [];
    const result = [];
    const markArr = mark === '-' ? typeMinus : typePlus;
    markArr
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
    return result;
  };

  // всі транзакції розходив
  const resultFilterMinus = filterYearMonth('февраль', 2020, '-');
  // всі транзакції доходов
  const resultFilterPlus = filterYearMonth('февраль', 2020, '+');

  // Додає всі мінусові витрати за вибраний рік і місяць
  const plusAllMinusTransactions = resultFilterMinus.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );

  // Додає всі доходи  вибраний рік і місяць
  const plusAllPositiveTransactions = resultFilterPlus.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );

  //-----------------------------------------
  // УВАГА УВАГА УВАГА тут зара буде КОСТИЛЬ).
  const getСategory = list => {
    const arr = [];

    list.forEach(element => {
      arr.push(element.category);
    });

    const allCategory = [];
    arr.forEach(elem => {
      if (!allCategory.includes(elem)) {
        allCategory.push(elem);
      }
    });
    return allCategory;
  };

  const total = (list, category) => {
    let total = 0;
    for (const item of list) {
      if (item.category === category) {
        total += item.amount;
      }
    }
    return total;
  };

  const allCategory = getСategory(resultFilterMinus);

  const totalAmount = [];

  allCategory.forEach(element => {
    totalAmount.push({
      category: element,
      amount: total(resultFilterMinus, element),
    });
  });

  console.log('totalAmount :', totalAmount);

  //-----------------------------------------

  const todayYear = moment().format('YYYY');
  const todayMonth = moment().format('MMMM');

  const [today] = useState({ month: todayMonth, year: todayYear });

  const [chartData, setChartData] = useState({
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

  // const changeChartData = (totalAmount, chartData) => {
  //   for (let i=0; )

  //   chartData.label[0]
  // }

  return (
    <div>
      <p className={s.statistic_p}>статистика</p>
      <div className={s.diagramTab_main_div}>
        <Chart chartData={chartData} />
        <TableTablet
          today={today}
          expenses={plusAllMinusTransactions}
          income={plusAllPositiveTransactions}
          labels={chartData.labels}
          value={chartData.datasets.map(el => el.data)}
          color={chartData.datasets.map(el => el.backgroundColor)}
        />
      </div>
    </div>
  );
};

export default DiagramTab;
