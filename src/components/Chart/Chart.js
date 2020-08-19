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

  const widthDevice = window.screen.width;

  return (
    <div className={s.chart_main_div}>
      {widthDevice <= 767 && (
        <Pie
          data={chartData}
          width={300}
          height={350}
          options={chartOptions.options}
        />
      )}
      {widthDevice >= 768 && (
        <Pie
          data={chartData}
          width={400}
          height={450}
          options={chartOptions.options}
        />
      )}
    </div>
  );
};

ChartItem.defaultProps = {
  chartData: '',
};

ChartItem.propTypes = {
  chartData: PropTypes.oneOfType([
    PropTypes.shape({}).isRequired,
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
};

export default ChartItem;
