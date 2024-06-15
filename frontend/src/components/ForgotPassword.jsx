import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { USER_URL } from "../constants";
import Loader from "./Loader.jsx";

const ForgotPassword = ({ isVisible, onClose }) => {

  const [email, setEmail] = useState("");
  
  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${USER_URL}/forgot-password`, {
        email,
      });
      // console.log(response.data);
      if (response.data === "Email not registered") {
        toast.error("Email not registered");
      } else {
        toast.success("Check your inbox for reset password link", {
          duration: 4000, icon: '📩', style:{fontSize: '18px'}
        });
        setEmail("")
        onClose(isVisible = false)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-2 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#dfdfdf] text-gray-800 rounded-lg shadow-lg shadow-black max-w-sm w-full"
      >
        <div className="text-right pr-2 pt-2">
          <button className="px-2 py-1 text-base text-black " onClick={onClose}>
            <ImCross />
          </button>
        </div>

        <form className="px-6 pt-1 pb-4" onSubmit={handleSubmit}>
          <h2 className="text-xl text-center font-bold mb-2">
            Forgot Password
          </h2>
          <p className="mb-3 text-[16px] font-medium text-center">
            Please enter your email address
          </p>

          <div className="mb-3">
            <input
              type="email"
              className="w-full text-[16px] py-1 px-2 rounded-md border-2 border-gray-700"
              value={email}
              placeholder="Registered email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center space-x-2">
            <button
              className="px-3 py-2 text-[16px] rounded-md bg-black text-white shadow-sm hover:font-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
