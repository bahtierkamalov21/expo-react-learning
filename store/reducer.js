import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rootBottomSheet: false,
};

export const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    setRootBottomSheet: (state, actions) => {
      switch (state.rootBottomSheet) {
        case false: 
          state.rootBottomSheet = true;
          break;
        case true:
          state.rootBottomSheet = false;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRootBottomSheet } = indexSlice.actions;

export default indexSlice.reducer;
