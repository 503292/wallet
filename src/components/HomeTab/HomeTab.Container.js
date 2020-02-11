import { connect } from 'react-redux';
import HomeTab from './HomeTab';
import { getData } from '../../redux/finance/financeSelectors';

const mapStateToProps = state => ({
  data: getData(state),
});

export default connect(mapStateToProps)(HomeTab);
