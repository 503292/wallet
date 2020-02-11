import { connect } from 'react-redux';
import AddTransaction from './AddTransaction';
import { addTransaction } from '../../redux/finance/financeActions';
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
  addTransaction,
  modalAddTransactionClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
