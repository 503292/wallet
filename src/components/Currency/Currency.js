import React, { Component } from 'react';
import shortid from 'shortid';
import { getCurrencyPrivatBank } from '../../services/api';
import Preloader from './Preloader';
import css from './Currency.module.css';

class Currency extends Component {
  state = {
    currency: [],
    loader: true,
  };

  componentDidMount() {
    getCurrencyPrivatBank()
      .then(data => {
        this.setState({
          currency: data.filter(elem => elem.ccy !== 'BTC'),
          loader: false,
        });
      })
      .catch(error => {
        this.setState({
          currency: error,
          loader: false,
        });
      });
  }

  render() {
    const { currency, loader } = this.state;
    return (
      <>
        <div className={css.currencyContainer}>
          {loader && <Preloader />}
          {currency.length > 0 && (
            <table className={css.currencyTable}>
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                </tr>
              </thead>
              <tbody>
                {currency.map(elem => (
                  <tr key={shortid.generate()}>
                    <td>{elem.ccy}</td>
                    <td>{elem.buy}</td>
                    <td>{elem.sale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

export default Currency;
