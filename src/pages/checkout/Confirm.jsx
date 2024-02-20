import React from 'react';

const ConfirmationModal = ({ closeModal }) => {
  return (
    <div className= "w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
      <div className="bg-white p-5 rounded-lg text-center">
        <p className='pb-5 text-black font-bold text-xl'>Order submitted. Thank you for shopping with us!</p>
        <div className='flex justify-around items-center'>
            <button className="bg-blue-500 w-40 p-4 rounded-xl" onClick={closeModal}>OK</button>
        </div>
      </div>
    </div>
    // <div className="ModalOverlay">
    //   <div className="ConfirmationModal">
    //     <p>Order submitted. Thank you for shopping with us!</p>
    //     <button onClick={closeModal}>OK</button>
    //   </div>
    // </div>
  );
};

export default ConfirmationModal;
