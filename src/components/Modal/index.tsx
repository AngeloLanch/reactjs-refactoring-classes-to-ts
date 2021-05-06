import ReactModal from 'react-modal';
import {useState, useEffect} from 'react';

interface modalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}

function Modal({children, isOpen, setIsOpen}: modalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    if(modalStatus !== isOpen) {
      console.log(isOpen)
      setModalStatus(isOpen)
    }
  }, [modalStatus, isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
