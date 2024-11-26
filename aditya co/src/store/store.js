import { configureStore } from "@reduxjs/toolkit";
import SceneSlice from "./app.Slice.js";

export const store = configureStore({
  reducer: { scene: SceneSlice },
});
