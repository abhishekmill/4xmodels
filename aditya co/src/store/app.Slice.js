import { createSlice } from "@reduxjs/toolkit";

export const SceneSlice = createSlice({
  name: "scene",
  initialState: {
    scene: "home",
  },
  reducers: {
    ShowInfra: (state) => {
      state.scene = "infra";
      console.log("infrA");
    },
    ShowSchools: (state) => {
      state.scene = "schools";
    },
    ShowHumanCapicity: (state) => {
      state.scene = "human";
    },
    ShowContent: (state) => {
      state.scene = "content";
    },
    ShowHome: (state) => {
      state.scene = "home";
    },
  },
});

export const {
  ShowInfra,
  ShowSchools,
  ShowHumanCapicity,
  ShowHome,
  ShowContent,
} = SceneSlice.actions;

export default SceneSlice.reducer;
