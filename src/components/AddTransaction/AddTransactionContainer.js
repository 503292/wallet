import { connect } from 'react-redux';
import AddTransaction from './AddTransaction';
import { addTransactionOperation } from '../../redux/finance/financeOperations';
import {
  getTotalBalance,
  getTypeTotalBalance,
} from '../../redux/finance/financeSelectors';
import { modalAddTransactionClose } from '../../redux/global/globalActions';

const mapStateToProps = state => ({
  totalBalanceState: getTotalBalance(state),
  typeTotalBalanceState: getTypeTotalBalance(state),
});

const mapDispatchToProps = {
  addTransactionOperation,
  modalAddTransactionClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
