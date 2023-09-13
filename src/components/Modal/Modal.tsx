import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {FaRegWindowClose} from 'react-icons/fa';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({isOpen, onClose, title, children}: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  if (!isOpen || !modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} aria-label="Close modal">
            <FaRegWindowClose className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
