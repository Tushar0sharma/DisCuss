// user.slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
    },
    removeuser: (state) => {
      state.user = null;
      state.isLoggedin = false;
    },
  },
});

export const { setuser, removeuser } = userSlice.actions;
export default userSlice.reducer;