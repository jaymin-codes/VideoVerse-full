import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterSuccessPopUp = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="mx-2 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#dfdfdf] text-gray-800 rounded-lg shadow-lg shadow-black p-6 max-w-sm w-full"
      >
        <h2 className="text-xl font-bold mb-4">Registration Successful ✅</h2>
        <p className="mb-4 text-[16px]">Kindly login again to get started 😄</p>
        <div className="flex justify-center space-x-2">
          {/* <button
            className="px-4 py-2 tex rounded-md border-2 border-black"
            onClick={onClose}
          >
            Close
          </button> */}
          <Link
            to="/login"
            className="px-4 py-2 text-[15px] bg-black text-white rounded-md"
          >
            Go to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterSuccessPopUp;
