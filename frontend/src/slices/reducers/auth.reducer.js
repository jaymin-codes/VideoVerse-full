import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../actions/auth.action";

const userReducer = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null, // Takes the payload
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "invalid user credentials!";
        } else {
          state.error = action.error.message;
        }
      })

      // LOGOUT USER
      .addCase(logoutUser.pending, (state) => {
        state.loading = true,
        state.user = null,
        state.error = null
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
        localStorage.removeItem("user"); 
      })
      .addCase(logoutUser.rejected, (state,action) => {
        state.loading = false,
        state.user = null,
        state.error = action.payload
      })

      // REGISTER USER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log("in reducer -----> ", action);
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
        console.log("reducer error -----> ", action);
      })
  },
});

export default userReducer.reducer; // Ensure default export

