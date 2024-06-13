import React from "react";
import { Link } from "react-router-dom";
import NavbarOt from "../components/NavbarOt";
import NavbarIn from "../components/NavbarIn";

function PageNotFound() {
  const user = localStorage.getItem("user");

  return (
    <>
      {user ? <NavbarIn /> : <NavbarOt />}
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Uh-oh!
          </p>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            We can't find that page.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
