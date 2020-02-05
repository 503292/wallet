import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const modalRef = useRef();

  const handleClose = useCallback(e => {
    if (e.code !== 'Escape') {
      return;
    }
    onClose();
  });

  const backdropClose = e => {
    if (modalRef.current && e.target !== modalRef.current) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <div
      className={s.modal_main_div}
      ref={modalRef}
      onClick={(handleClose, backdropClose)}
      role="presentation"
    >
      <div className={s.modal_div_children}>{children}</div>
    </div>,
    MODAL_ROOT,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
