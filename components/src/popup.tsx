import React from 'react';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <p className="mb-4">{message}</p>
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default Popup;
