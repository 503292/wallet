import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTransaction from '../AddTransaction/AddTransactionContainer';
import css from './ModalAdd.module.css';

class ModalAdd extends Component {
  static propTypes = {
    modalAddTransactionClose: PropTypes.func.isRequired,
    modalAddTransactionOpen: PropTypes.func.isRequired,
    isModalAddTransactionOpen: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.modalAddTransactionClose();
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget && target !== currentTarget) {
      return;
    }
    this.props.modalAddTransactionClose();
  };

  render() {
    const { isModalAddTransactionOpen, modalAddTransactionOpen } = this.props;

    return (
      <div>
        <button
          type="button"
          className={css.modalButton}
          onClick={modalAddTransactionOpen}
        >
          +
        </button>
        {isModalAddTransactionOpen && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
            onClick={this.handleBackdropClick}
            onKeyUp={this.handleKeyPress}
          >
            <div className={css.modal}>
              <AddTransaction />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalAdd;
