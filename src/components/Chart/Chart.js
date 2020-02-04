import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
// import DiagramSample from '../../assets/diagram_sample.png';
import s from './Chart.module.css';

const ChartItem = () => {
  // eslint-disable-next-line no-unused-vars
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
    datasets: [
      {
        label: 'population',
        data: [1235, 5687, 4788, 0, 25, 4587, 6587, 1, 568],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  });

  return (
    <div className={s.chart_main_div}>
      <Pie
        data={chartData}
        width={320}
        height={350}
        options={{ maintainAspectRatio: false }}
      />
      {/* <img className={s.diagram_sample} src={DiagramSample} alt="diagram" /> */}
      {/* <myChart width="400" height="400" /> */}
    </div>
  );
};

export default ChartItem;
