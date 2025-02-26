import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPost: [],
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    getListPostRequest(state, action) {},
    getListPostSuccess(state, action) {
      state.listPost = action.payload;
    },
  },
});

export const { getListPostRequest, getListPostSuccess } = postSlice.actions;
export default postSlice.reducer;
