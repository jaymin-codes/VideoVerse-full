import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function LoginScreen() {
  return (
      <div className="flex items-center justify-center my-14">

        <div className="md:w-1/3">
        
          <div className="mb-2 flex justify-center">
            <img src={Logo} alt="videoverse" className="h-[130px]" />
          </div>

          <h2 className="text-center text-2xl font-bold">
            Sign in to your account
          </h2>

          <form action="#" method="POST" className="mt-8">

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
                  ></input>
                </div>

                <div className="text-right pt-1">
                    <a
                    href="#"
                    title=""
                    className="text-sm font-semibold"
                  >
                    Forgot password?
                  </a>
                  </div>
              </div>

              <div>
                <button
                  type="button"
                  className="signUp-signIn-button"
                >
                  Get started
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
  );
}

export default LoginScreen;
