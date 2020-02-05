/* eslint-disable no-console */
import React, { useState } from 'react';
import s from './DiagramTab.module.css';
import Chart from '../../components/Chart/Chart';
// import Table from '../../components/Table/Table';
import TableTablet from '../../components/Table/TableTablet';
import 'chartjs-plugin-labels';

const DiagramTab = () => {
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
        // display: true,
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

  // console.log(chartData.labels);
  // console.log(chartData.datasets.map(el => el.data));
  // console.log(chartData.datasets.map(el => el.backgroundColor));

  return (
    <div>
      <p className={s.statistic_p}>статистика</p>
      <div className={s.diagramTab_main_div}>
        <Chart chartData={chartData} />
        {/* <Table
          labels={chartData.labels}
          value={chartData.datasets.map(el => el.data)}
          color={chartData.datasets.map(el => el.backgroundColor)}
        /> */}
        <TableTablet
          labels={chartData.labels}
          value={chartData.datasets.map(el => el.data)}
          color={chartData.datasets.map(el => el.backgroundColor)}
        />
      </div>
    </div>
  );
};

export default DiagramTab;
