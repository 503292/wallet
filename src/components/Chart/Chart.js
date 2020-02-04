import React from 'react';
import { Pie } from 'react-chartjs-2';
// import DiagramSample from '../../assets/diagram_sample.png';
import s from './Chart.module.css';

const ChartItem = ({ chartData }) => {
  // const [chartData] = useState({
  //   labels: [
  //     'Основные расходы',
  //     'Продукты',
  //     'Машина',
  //     'Забота о себе',
  //     'Забота о детях',
  //     'Товары для дома',
  //     'Образование',
  //     'Досуг',
  //     'Другие расходы',
  //   ],
  //   options: {
  //     legend: {
  //       display: false,
  //       position: 'bottom',
  //     },
  //   },
  //   datasets: [
  //     {
  //       label: 'wallet',
  //       data: [1235, 5687, 4788, 3200, 2500, 4587, 6587, 1561, 5618],
  //       backgroundColor: [
  //         '#ecb22a',
  //         '#e28b20',
  //         '#d25925',
  //         '#67b7d0',
  //         '#5593d7',
  //         '#3e6ba8',
  //         '#9cc254',
  //         '#73ad57',
  //         '#507c3a',
  //       ],
  //     },
  //   ],
  // });

  return (
    <div className={s.chart_main_div}>
      <Pie
        data={chartData}
        width={300}
        height={350}
        options={chartData.options}
      />
      {/* <img className={s.diagram_sample} src={DiagramSample} alt="diagram" /> */}
      {/* <myChart width="400" height="400" /> */}
    </div>
  );
};

export default ChartItem;
