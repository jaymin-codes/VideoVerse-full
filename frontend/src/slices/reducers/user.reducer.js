import { createSlice } from "@reduxjs/toolkit";
import { updateUserInfo } from "../actions/user.action.js";

const updateUserReducer = createSlice({
  name: "updateUser", //name of the slice

  initialState: { //states of the slice
    loading: false,
    updateUser: null,
    error: null,
  },
  extraReducers: (builder) => { 
    //extraReducers to handle states of slice based on action
    builder
      // UPDATE USER EMAIL FULLNAME
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.updateUser = null;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.updateUser = action.payload;
        state.error = null;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.updateUser = null;
        state.error = action.payload
        // console.log("in reducer ------> ",action.payload);
      })

  },
});

export default updateUserReducer.reducer; 

