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
        const dataUSD = data.find(elem => elem.ccy === 'USD');
        dataUSD.buy = Number(dataUSD.buy).toFixed(2);
        dataUSD.sale = Number(dataUSD.sale).toFixed(2);

        const dataEUR = data.find(elem => elem.ccy === 'EUR');
        dataEUR.buy = Number(dataEUR.buy).toFixed(2);
        dataEUR.sale = Number(dataEUR.sale).toFixed(2);

        const dataRUR = data.find(elem => elem.ccy === 'RUR');
        dataRUR.buy = Number(dataRUR.buy).toFixed(3);
        dataRUR.sale = Number(dataRUR.sale).toFixed(3);

        const currency = [dataUSD, dataEUR, dataRUR];

        this.setState({
          currency,
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
