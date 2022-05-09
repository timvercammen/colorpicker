import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    code: "#28B125",
    name: "Green",
  },
];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload: { code, name } }) {
      state.push({
        id: nanoid(4),
        code,
        name,
      });
    },
    chooseColor(state = initialState, { payload: { id, code } }) {
      const objectToEdit = state.find((color) => color.id === id);
      objectToEdit.code = code;
    },
  },
});

export default colorSlice;
export const { addColor, chooseColor } = colorSlice.actions;
