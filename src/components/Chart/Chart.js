/* eslint-disable  */
import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import s from './Chart.module.css';

const ChartItem = ({ chartData }) => {
  const chartOptions = {
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
  };

  return (
    <div className={s.chart_main_div}>
      <Pie
        data={chartData}
        width={300}
        height={350}
        options={chartOptions.options}
      />
    </div>
  );
};

ChartItem.propTypes = {
  chartData: PropTypes.shape({}).isRequired,
};

export default ChartItem;
