import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { USER_URL } from "../constants";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


function ResetPasswordScreen() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { id, token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.patch(
        `${USER_URL}/reset-password/${id}/${token}`,
        { password: newPass }
      );

      if (response.status === 200) {
        toast.success("Password updated successfully", { duration: 2000 });
        toast.success("Please wait, You will be navigated to login screen", {
          icon: "⏳",
        });
      }

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("Error while setting new password");
      console.error("Error:", error);
    }
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Toaster />
      <div className="md:w-1/3 w-[80%] space-y-5">
        <h2 className="md:text-3xl text-2xl font-semibold text-center p-2">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-3">
            <label htmlFor="newPassword" className="text-base font-medium">
              New Password
            </label>
            <div className="mt-2">
              <input
                className="signUp-signIn-input-field"
                type={showPass ? "text" : "password"}
                id="newPassword"
                placeholder="New password"
                onChange={(e) => setNewPass(e.target.value)}
                value={newPass}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 mt-[30px] flex items-center cursor-pointer"
                onClick={toggleShowPass}
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          <div className="relative mb-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="text-base font-medium"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="signUp-signIn-input-field"
                type={showPass ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                onChange={(e) => setConfirmPass(e.target.value)}
                value={confirmPass}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 mt-[30px] flex items-center cursor-pointer"
                onClick={toggleShowPass}
              >
                {showPass ?  <FaRegEyeSlash />:<FaRegEye /> }
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="signUp-signIn-button mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="mt-2 text-center text-base">
            Go back to{" "}
            <Link to="/login" className="font-medium underline">
              Login
            </Link>
          </p>
    </div>
  );
}

export default ResetPasswordScreen;
