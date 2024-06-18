import { useState } from "react";
import Loader from "../Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { updateUserInfo } from "../../slices/actions/user.action.js";

function ProfileInfo() {
  //redux
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const data = user.user;

  const [fullName, setFullName] = useState(data.fullName);
  const [email, setEmail] = useState(data.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let updatedData = {
        fullName: fullName,
        email: email,
      };

      const resultAction = await dispatch(updateUserInfo(updatedData));
      const { payload, error } = resultAction;

      if (payload) {
        const oldUserData = JSON.parse(localStorage.getItem("user"));
        oldUserData.user.fullName = payload.fullName;
        oldUserData.user.email = payload.email;
        localStorage.setItem("user", JSON.stringify(oldUserData));
        window.location.reload();
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
      }

      if (error) {
        toast.error("Error while updating user details", error);
      }
    } catch (err) {
      console.error("Update user error:", err);
      toast.error("Something went wrong with the updation");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-4 mb-6"
    >
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="sm:w-1/2 space-y-4 w-full"
        >
          <div className="space-y-1">
            <label
              htmlFor="fullName"
              className="sm:text-base text-sm text-gray-300 font-medium "
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="signUp-signIn-input-field"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="sm:text-base text-sm text-gray-300 font-medium "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signUp-signIn-input-field"
            />
          </div>

          <button
            type="submit"
            className="navbar-btn font-bold w-[100px] text-lg sm:text-xl"
          >
            Save
          </button>
        </motion.div>
      )}
    </form>
  );
}

export default ProfileInfo;
