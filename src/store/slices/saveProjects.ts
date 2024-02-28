import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {DataCardProject} from 'model/components/projects';

export interface AuthState {
  object?: DataCardProject;
}

const initialState: AuthState = {
  object: undefined,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    saveObjects: (state, action: PayloadAction<DataCardProject>) => {
      state.object = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveObjects } = projectSlice.actions;

export default projectSlice.reducer;
