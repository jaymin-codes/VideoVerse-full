import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/actions/auth.action.js";

function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //redux state
  const { loading, error } = useSelector((state) => state.user);



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredentials = {
      userName: login,
      email: login,
      password,
    };
    dispatch(loginUser(userCredentials))
      .then((result) => {
        if (result.payload) {
          console.log(result.payload);
          setLogin("");
          setPassword("");
          navigate("/");
        }
      })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-center my-14">
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
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium ">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="signUp-signIn-input-field"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  ></input>
                </div>

                <div className="text-right pt-1">
                  <a href="#" title="" className="text-sm font-semibold">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="signUp-signIn-button"
                >
                  {loading ? "Loading..." : "Get Started"}
                </button>
              </div>
            </div>

            {error && <div>{error}</div>}

          </form>

          <p className="mt-2 text-center text-base">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginScreen;
