import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../actions/auth.action";

const userReducer = createSlice({
  name: "user", //name of the slice

  initialState: { //states of the slice
    loading: false,
    user: null,
    error: null,
  },

  extraReducers: (builder) => { //extraReducers to handle states of slice based on action
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
        state.error = action.payload
        // console.log("in reducer ------> ",action.payload);
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
        state.error = action.error?.message
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
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error;
      })
  },
});

export default userReducer.reducer; 

