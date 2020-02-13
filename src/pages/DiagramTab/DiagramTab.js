/* eslint-disable react/prop-types */
// /* eslint-disable  */
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import moment from 'moment';
// import 'moment/locale/ru';
// import s from './DiagramTab.module.css';
// import Chart from '../../components/Chart/Chart';
// import * as financeSelectors from '../../redux/finance/financeSelectors';
// import TableTablet from '../../components/Table/TableTablet';
// import 'chartjs-plugin-labels';

// const DiagramTab = () => {
//   const financeData = useSelector(store =>
//     financeSelectors.getFinanceData(store),
//   );

//   const typePlus = financeData.filter(el => el.type === '+');
//   const typeMinus = financeData.filter(el => el.type === '-');

// функція вертає всі МІНУСОВІ транзакції (фільтрація по Year & Month)
// const filterYearMonth = (month, year, mark) => {
//   const tmpYear = [];
//   const result = [];
//   const markArr = mark === '-' ? typeMinus : typePlus;
//   markArr
//     .filter(el => {
//       const getYear = moment(el.date).format('YYYY');
//       if (+getYear === year) {
//         tmpYear.push(el);
//       }
//       return tmpYear;
//     })
//     .filter(el => {
//       const getMonth = moment(el.date).format('MMMM');
//       if (getMonth === month) {
//         result.push(el);
//       }
//     });
//   return result;
// };

//   // всі транзакції розходив
//   const resultFilterMinus = filterYearMonth('февраль', 2020, '-');
//   // всі транзакції доходов
//   const resultFilterPlus = filterYearMonth('февраль', 2020, '+');

//   // Додає всі мінусові витрати за вибраний рік і місяць
//   const plusAllMinusTransactions = resultFilterMinus.reduce(
//     (acc, { amount }) => acc + amount,
//     0,
//   );

//   // Додає всі доходи  вибраний рік і місяць
//   const plusAllPositiveTransactions = resultFilterPlus.reduce(
//     (acc, { amount }) => acc + amount,
//     0,
//   );

//   //-----------------------------------------
//   // УВАГА УВАГА УВАГА тут зара буде КОСТИЛЬ).
//   const getСategory = list => {
//     const arr = [];

//     list.forEach(element => {
//       arr.push(element.category);
//     });

//     const allCategory = [];
//     arr.forEach(elem => {
//       if (!allCategory.includes(elem)) {
//         allCategory.push(elem);
//       }
//     });
//     return allCategory;
//   };

//   const total = (list, category) => {
//     let total = 0;
//     for (const item of list) {
//       if (item.category === category) {
//         total += item.amount;
//       }
//     }
//     return total;
//   };

//   const allCategory = getСategory(resultFilterMinus);

//   const totalAmount = [];

//   allCategory.forEach(element => {
//     totalAmount.push({
//       category: element,
//       amount: total(resultFilterMinus, element),
//     });
//   });

//   console.log('totalAmount :', totalAmount);

//   //-----------------------------------------

//   const [today] = useState({ month: todayMonth, year: todayYear });

//   const [chartData, setChartData] = useState(м);

//   return (
//     <div>
//       <p className={s.statistic_p}>статистика</p>
//       <div className={s.diagramTab_main_div}>
//         <Chart chartData={chartData} />
//         <TableTablet
//           today={today}
//           expenses={plusAllMinusTransactions}
//           income={plusAllPositiveTransactions}
//           labels={chartData.labels}
//           value={chartData.datasets.map(el => el.data)}
//           color={chartData.datasets.map(el => el.backgroundColor)}
//         />
//       </div>
//     </div>
//   );
// };

// export default DiagramTab;

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

    const chartData = arrDataForTable.reduce((acc, el) => {
      const newAcc = {
        ...acc,
        labels: [...acc.labels, el.category],
        datasets: [
          {
            label: 'wallet',
            data: [...acc.datasets[0].data, el.totalAmount], // заполнять отфильтрованными значениями
            backgroundColor: [...acc.datasets[0].backgroundColor, el.color], // заполнять отфильтрованными значениями
          },
        ],
      };
      return newAcc;
    }, initialChartData);
    console.log(chartData);

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
