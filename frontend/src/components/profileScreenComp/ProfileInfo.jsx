import {useState} from "react";
import Loader from "../Loader.jsx";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function ProfileInfo() {

//redux
  const { user, loading } = useSelector((state) => state.user);
  const data = user.user;

  const [fullName, setFullName] = useState(data.fullName);
  const [email, setEmail] = useState(data.email);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let updatedData = {
        fullName: fullName,
        email: email
      }

      console.log(updatedData);
    } catch (error) {
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4 mb-6">
      {loading ? (
        <Loader />
      ) : (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }} className="sm:w-1/2 space-y-4 w-full">
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
