import { connect } from 'react-redux';
import ModalAdd from './ModalAdd';
import { modalAddTransactionClose } from '../../redux/global/globalActions';
import { getIsModalAddTransactionOpen } from '../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isModalAddTransactionOpen: getIsModalAddTransactionOpen(state),
});

const mapDispatchToProps = {
  modalAddTransactionClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);
