import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/actions/auth.action.js";
import ForgotPassword from "../components/ForgotPassword.jsx";
import Loader from "../components/Loader.jsx";
import NavbarOt from "../components/NavbarOt.jsx";

function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredentials = {
        userName: login,
        email: login,
        password,
      };

      const resultAction = await dispatch(loginUser(userCredentials));
      const { payload, error } = resultAction;

      if (payload.user) {
        setLogin("");
        setPassword("");
        navigate("/profile");
      }

      if (error) {
        toast.error("Invalid user credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong with login");
    }
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <NavbarOt />
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center mb-10 md:mt-[80px] mt-[120px]">
          <div className="md:w-1/3">
            <div className="mb-2 flex justify-center">
              <img src={Logo} alt="videoverse" className="h-[130px]" />
            </div>

            <h2 className="text-center text-2xl font-bold">
              Sign in to your account
            </h2>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium ">
                    Email or Username
                  </label>
                  <div className="mt-2">
                    <input
                      className="signUp-signIn-input-field"
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setLogin(e.target.value)}
                      value={login}
                      required
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium">
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      className="signUp-signIn-input-field w-full pr-10"
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      id="password"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={toggleShowPass}
                    >
                      {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                  <div className="text-right pt-1">
                    <button onClick={() => setModalVisible(true)} type="button">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <div>
                  <button type="submit" className="signUp-signIn-button">
                    Get Started
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-2 text-center text-base">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      )}
      <ForgotPassword
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </motion.div>
  );
}

export default LoginScreen;
