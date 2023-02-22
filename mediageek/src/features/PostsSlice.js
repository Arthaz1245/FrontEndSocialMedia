import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "3",
    description: "This is a test",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1310242745.jpg?crop=0.670xw:1.00xh;0,0&resize=480:*",
  },
  {
    id: "7",
    description: "This is a test 2",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1310242745.jpg?crop=0.670xw:1.00xh;0,0&resize=480:*",
  },
  {
    id: "10",
    description: "This is a test 3",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1310242745.jpg?crop=0.670xw:1.00xh;0,0&resize=480:*",
  },
  {
    id: "11",
    description: "This is a test 4",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1310242745.jpg?crop=0.670xw:1.00xh;0,0&resize=480:*",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
