// modal.jsx
import React from 'react';


// Props:
// isOpen: boolean =>
// when true => render modal
// when false => return null

// onClose => () => void (funkcija)
// koja se izvrsava po zatvaranju modala

// children => ono sto cemo da rendereujemo unutar samog modala

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;