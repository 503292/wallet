import React from 'react';
import s from './DiagramTab.module.css';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

const DiagramTab = () => {
  return (
    <div className={s.diagramTab_main_div}>
      <Chart />
      <Table />
    </div>
  );
};

export default DiagramTab;
