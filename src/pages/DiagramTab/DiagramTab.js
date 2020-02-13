/* eslint-disable  */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';
import s from './DiagramTab.module.css';
import Chart from '../../components/Chart/Chart';
import * as financeSelectors from '../../redux/finance/financeSelectors';
import TableTablet from '../../components/Table/TableTablet';
import 'chartjs-plugin-labels';

const colors = [
  '#ecb22a',
  '#e28b20',
  '#d25925',
  '#67b7d0',
  '#5593d7',
  '#3e6ba8',
  '#9cc254',
  '#73ad57',
  '#507c3a',
];

const labels = [
  'Основные расходы',
  'Продукты',
  'Машина',
  'Забота о себе',
  'Забота о детях',
  'Товары для дома',
  'Образование',
  'Досуг',
  'Другие расходы',
];

const optionsMonth = [
  { value: 'январь', label: 'январь' },
  { value: 'февраль', label: 'февраль' },
  { value: 'март', label: 'март' },
  { value: 'апрель', label: 'апрель' },
  { value: 'май', label: 'май' },
  { value: 'июнь', label: 'июнь' },
  { value: 'июль', label: 'июль' },
  { value: 'август', label: 'август' },
  { value: 'сентябрь', label: 'сентябрь' },
  { value: 'октябрь', label: 'октябрь' },
  { value: 'ноябрь', label: 'ноябрь' },
  { value: 'декабрь', label: 'декабрь' },
];

const initialChartData = {
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
  labels: [], // заполнять отфильтрованными значениями
  datasets: [
    {
      label: 'wallet',
      data: [], // заполнять отфильтрованными значениями
      backgroundColor: [], // заполнять отфильтрованными значениями
    },
  ],
};

const addColorToArr = arr =>
  arr.map((el, indx) => ({ ...el, color: colors[indx] }));

class DiagramTab extends Component {
  state = {
    currentMonth: moment().format('MMMM'),
    currentYear: moment().format('YYYY'),
    selectedMonth: null,
    selectedYear: null,
    availableMonths: [], // for select
    availableYears: [], // for select
    filteredDataForCurrentMonthAndYear: [],
  };

  componentDidMount() {
    const { currentMonth, currentYear } = this.state;
    const { allTransactions } = this.props;
    this.setState({
      selectedMonth: { value: currentMonth, label: currentMonth },
      selectedYear: { value: currentYear, label: currentYear },
    });

    this.filterTransactionData(allTransactions, currentMonth, currentYear);
    this.setAvailbleYears();
    this.setState({ availableMonths: optionsMonth });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      currentMonth,
      currentYear,
      selectedMonth,
      selectedYear,
    } = this.state;
    const { allTransactions } = this.props;
    if (
      prevProps.allTransactions !== allTransactions ||
      prevState.currentMonth !== currentMonth ||
      prevState.currentYear !== currentYear
    ) {
      this.filterTransactionData(allTransactions, currentMonth, currentYear);
    }
    if (
      prevState.selectedMonth !== selectedMonth ||
      prevState.selectedYear !== selectedYear
    ) {
      this.changeCurrentMonthOrYear(selectedMonth.value, selectedYear.value);
    }
  }

  changeCurrentMonthOrYear = (newCurrentMonth, newCurrentYear) =>
    this.setState({
      currentMonth: newCurrentMonth,
      currentYear: newCurrentYear,
    });

  handleChangeMonth = selectedOption => {
    this.setState({ selectedMonth: selectedOption });
  };

  handleChangeYear = selectedOption => {
    this.setState({ selectedYear: selectedOption });
  };

  setAvailbleYears = () => {
    let tmp = moment().format('YYYY') - 1;
    let arrYear = [];
    for (let i = tmp; i < tmp + 10; i++) {
      arrYear.push({ value: String(i), label: i });
    }
    this.setState({ availableYears: arrYear });
  };

  filterTransactionData = (allTransactions, currentMonth, currentYear) => {
    this.setState({
      filteredDataForCurrentMonthAndYear: allTransactions
        .filter(el => moment(el.date).format('YYYY') === currentYear)
        .filter(el => moment(el.date).format('MMMM') === currentMonth),
    });
  };

  filterDataFromTable = filteredDataForCurrentMonthAndYear =>
    filteredDataForCurrentMonthAndYear
      .filter(el => el.type === '-')
      .map(el => ({ category: el.category, amount: el.amount }))
      .reduce((acc, el) => {
        // если есть такой элемент в acc, то к его amount добавить amount текущего элемента
        // если в acc нету элемента с такой категорией то добавить такой элемент
        if (acc.length > 0) {
          if (acc.find(item => item.category === el.category)) {
            return acc.map(mapItem =>
              mapItem.category === el.category
                ? { ...mapItem, amount: mapItem.amount + el.amount }
                : mapItem,
            );
          }
          return [...acc, el];
        }
        return [...acc, el];
      }, [])
      .map(el => ({ category: el.category, totalAmount: el.amount }));

  render() {
    const {
      availableMonths,
      availableYears,
      selectedMonth,
      selectedYear,
      filteredDataForCurrentMonthAndYear,
    } = this.state;

    const totalMonthIncome = filteredDataForCurrentMonthAndYear.reduce(
      (acc, el) => (el.type === '+' ? acc + el.amount : acc),
      0,
    );
    const totalMonthExpense = filteredDataForCurrentMonthAndYear.reduce(
      (acc, el) => (el.type === '-' ? acc + el.amount : acc),
      0,
    );
    const arrDataForTable = addColorToArr(
      this.filterDataFromTable(filteredDataForCurrentMonthAndYear),
    );
    // console.log(arrDataForTable, 'arrDataForTable');

    const chartData = () => {
      let leblesIn = arrDataForTable.map(({ category }) => category);
      let totalAmountIn = arrDataForTable.map(({ totalAmount }) => totalAmount);
      let colorIn = arrDataForTable.map(({ color }) => color);

      // console.log(leblesIn, 'leblesIn');
      // console.log(totalAmountIn, 'totalAmountIn');
      // console.log(colorIn, 'colorIn');
      let tmp = {
        labels: leblesIn, // заполнять отфильтрованными значениями
        datasets: [
          {
            label: 'wallet',
            fill: false,
            lineTension: 0.1,
            data: totalAmountIn, // заполнять отфильтрованными значениями
            backgroundColor: colorIn, // заполнять отфильтрованными значениями
          },
        ],
      };
      return tmp;
    };

    ////////////////////////

    // const chartData = arrDataForTable.reduce((acc, el) => {
    //   let leblesIn = arrDataForTable.map(({ category }) => category);
    //   let totalAmountIn = arrDataForTable.map(({ totalAmount }) => totalAmount);
    //   let colorIn = arrDataForTable.map(({ color }) => color);

    //   console.log(leblesIn, 'leblesIn');
    //   console.log(totalAmountIn, 'totalAmountIn');
    //   console.log(colorIn, 'colorIn');

    //   const newAcc = {
    //     ...acc,
    //     labels: [...acc.labels, el.category],
    //     datasets: [
    //       {
    //         label: 'wallet',
    //         data: [...acc.datasets[0].data, el.totalAmount], // заполнять отфильтрованными значениями
    //         backgroundColor: [...acc.datasets[0].backgroundColor, el.color], // заполнять отфильтрованными значениями
    //       },
    //     ],
    //   };
    //   return newAcc;
    // }, initialChartData);
    // console.log(chartData);

    return (
      <div>
        <p className={s.statistic_p}>статистика</p>
        <div className={s.diagramTab_main_div}>
          <Chart chartData={chartData} />
          <TableTablet
            totalMonthIncome={totalMonthIncome}
            totalMonthExpense={totalMonthExpense}
            availableMonths={availableMonths}
            availableYears={availableYears}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            handleChangeMonth={this.handleChangeMonth}
            handleChangeYear={this.handleChangeYear}
            arrDataForTable={arrDataForTable}
          />
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  allTransactions: financeSelectors.getFinanceData(state),
});

export default connect(mSTP)(DiagramTab);
