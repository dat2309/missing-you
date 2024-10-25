import React from 'react';

interface PopupProps {
  x: number;
  y: number;
}

const Popup: React.FC<PopupProps> = ({ x, y }) => {
  return (
    <div
      className="fixed bg-pink-300 text-center text-xl font-serif p-4 rounded shadow-lg"
      style={{ left: x, top: y, width: '220px', height: '50px' }}
    >
      Anh nhớ em!
    </div>
  );
};

export default Popup;
