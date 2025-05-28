import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: { searchTerm: "" },
  reducers: {
    setQuery: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
