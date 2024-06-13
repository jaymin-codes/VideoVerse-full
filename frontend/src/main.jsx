import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//redux
import { Provider } from "react-redux";
import { store } from "./store.js";
//screens
import LoginScreen from "./screens/LoginScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import ResetPasswordScreen from "./screens/ResetPasswordScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PageNotFound from "./screens/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route
        path="/reset-password/:id/:token"
        element={<ResetPasswordScreen />}
      />

      {/*private routes  */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
