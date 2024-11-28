import { createSlice } from "@reduxjs/toolkit";

export const SceneSlice = createSlice({
  name: "scene",
  initialState: {
    scene: "tutorial",
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
    ShowTutorial: (state) => {
      state.scene = "tutorial";
    },
  },
});

export const {
  ShowInfra,
  ShowSchools,
  ShowHumanCapicity,
  ShowHome,
  ShowContent,
  ShowTutorial,
} = SceneSlice.actions;

export default SceneSlice.reducer;
