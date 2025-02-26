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
    getListPostFailure(state) {
      state.listPost = initialState.listPost;
    },
  },
});

export const { getListPostRequest, getListPostSuccess, getListPostFailure } =
  postSlice.actions;
export default postSlice.reducer;
