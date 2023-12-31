import React from 'react';
import translations from './Translations'; // Make sure the path is correct

const Modal = ({ score, total, onClose, language }) => {
  // Get the correct translations based on the current language
  const { completed, score: scoreText, outOf, closingRemark, okayButton } = translations[language].modal;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">{completed}</h2>
          <p className="mb-8">{scoreText}: {score} {outOf} {total}</p>
          <p className="mb-8">{closingRemark}</p>
        </div>
        <div className="items-center px-4 py-3">
          <button
            id="ok-btn"
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={onClose} // Call the onClose function when this button is clicked
          >
            {okayButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
