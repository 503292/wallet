import { connect } from 'react-redux';
import HomeTab from './HomeTab';
import { getData } from '../../redux/finance/financeSelectors';
import { modalAddTransactionOpen } from '../../redux/global/globalActions';

const mapStateToProps = state => ({
  data: getData(state),
});

const mapDispatchToProps = {
  modalAddTransactionOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);
