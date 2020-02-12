/* eslint-disable react/prop-types */
import React from 'react';
import { Pie } from 'react-chartjs-2';
// import DiagramSample from '../../assets/diagram_sample.png';
import s from './Chart.module.css';

const ChartItem = ({ chartData }) => {
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
