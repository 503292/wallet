import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import { validateAll } from 'indicative/validator';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import css from './AddTransaction.module.css';
import {
  validationRules,
  validationMessages,
  Type,
  options,
  getCategory,
} from './helpers';

registerLocale('ru', ru);

class AddTransaction extends Component {
  state = {
    date: new Date(),
    type: '-',
    category: '',
    amount: '',
    comments: '',
    errors: null,
  };

  static propTypes = {
    totalBalanceState: PropTypes.number.isRequired,
    typeTotalBalanceState: PropTypes.string.isRequired,
    addTransactionOperation: PropTypes.func.isRequired,
    modalAddTransactionClose: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeSelect = evt => {
    this.setState({ category: evt.value });
  };

  handleChangeDate = date => {
    this.setState({
      date,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const {
      totalBalanceState,
      typeTotalBalanceState,
      addTransactionOperation,
      modalAddTransactionClose,
    } = this.props;
    const { date, type, category, amount, comments } = this.state;

    validateAll(
      { date, type, category, amount },
      validationRules,
      validationMessages,
    )
      .then(response => {
        let balanceAfter;
        let typeBalanceAfter;

        const balance =
          Number(`${typeTotalBalanceState}${totalBalanceState}`) +
          Number(`${response.type}${+response.amount}`);

        if (balance >= 0) {
          balanceAfter = balance;
          typeBalanceAfter = '+';
        }
        if (balance < 0) {
          balanceAfter = -balance;
          typeBalanceAfter = '-';
        }

        const data = {
          date: Number(moment(response.date).format('x')),
          type: response.type,
          category: response.category,
          amount: +response.amount,
          balanceAfter,
          comments,
          typeBalanceAfter,
        };
        addTransactionOperation(data);
        modalAddTransactionClose();
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          errors: formatedErrors,
        });
      });
  };

  render() {
    const { date, category, amount, comments, errors, type } = this.state;
    const getValue = getCategory(category, options);
    const { modalAddTransactionClose } = this.props;
    return (
      <>
        <div className={css.formAdd_divTitle}>
          <button
            type="button"
            className={css.formAdd_backBtn}
            onClick={modalAddTransactionClose}
          />
          <h2 className={css.formAdd_title}>Добавить транзакцию</h2>
        </div>
        <form className={css.formAdd} onSubmit={this.handleSubmit}>
          <div className={css.formAdd_radio}>
            <label htmlFor="income" className={css.formAdd_radioIncome}>
              <input
                type="radio"
                cheked={Type.Income}
                id="income"
                name="type"
                value={Type.Income}
                onChange={this.handleChange}
              />
              <span>Доход</span>
            </label>
            <span className={css.formAdd_spanelement}>|</span>
            <label htmlFor="expense" className={css.formAdd_radioExpense}>
              <input
                type="radio"
                defaultChecked
                cheked={Type.Expense}
                id="expense"
                name="type"
                value={Type.Expense}
                onChange={this.handleChange}
              />
              <span>Расход</span>
            </label>
          </div>
          {errors && (
            <span style={{ color: '#ff0000', display: 'block' }}>
              {errors.type}
            </span>
          )}
          {type === '-' && (
            <div className={css.formAdd_select}>
              <Select
                className={css.select}
                value={getValue}
                onChange={this.handleChangeSelect}
                options={options}
                placeholder="Категория"
                // isClearable
                isSearchable
              />
            </div>
          )}
          <div className={css.formAdd_amountAndDate}>
            <input
              placeholder="введите сумму..."
              type="number"
              min="10"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
            {errors && (
              <span className={css.errorsAmount}>{errors.amount}</span>
            )}
            <DatePicker
              name="date"
              selected={date}
              onChange={this.handleChangeDate}
              dateFormat="dd/MM/yyyy"
              locale="ru"
              isClearable
            />
            {errors && <span className={css.errorsDate}>{errors.date}</span>}
          </div>
          <div className={css.formAdd_comments}>
            <h3>Коментарий</h3>
          </div>
          <div className={css.formAdd_textarea}>
            <textarea
              type="text"
              placeholder="напишите коментарий..."
              name="comments"
              value={comments}
              onChange={this.handleChange}
            />
          </div>
          <div className={css.divButton}>
            <button type="submit" className={css.formAdd_btn}>
              Добавить
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default AddTransaction;
