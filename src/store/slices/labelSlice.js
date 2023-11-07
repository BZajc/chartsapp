import { createSlice } from "@reduxjs/toolkit";

export const labelSlice = createSlice({
  name: "label",
  initialState: {
    labels: [],
  },
  reducers: {
    addLabel: (state, action) => {
      const id = Date.now();
      const label = action.payload;
      state.labels.push({ id, label, keyValuePairs: [] });
      console.log(`Added new label ${label} with id ${id}`);
    },
    removeLabel: (state, action) => {
      const idToRemove = action.payload;
      state.labels = state.labels.filter((label) => label.id !== idToRemove);
    },
    renameLabel: (state, action) => {
      const { id, newLabel } = action.payload;
      const labelToRename = state.labels.find((label) => label.id === id);
      if (labelToRename) {
        labelToRename.label = newLabel;
        console.log(`Renamed label with id ${id} to ${newLabel}`);
      }
    },
    addKeyValue: (state, action) => {
      const { id, key, value } = action.payload;
      const labelToUpdate = state.labels.find((label) => label.id === id);
      if (labelToUpdate) {
        labelToUpdate.keyValuePairs.push({ key, value });
        console.log(`Added key-value pair to label with id ${id}: ${key} - ${value}`);
      }
    },
  },
});

export const { addLabel, removeLabel, renameLabel, addKeyValue } = labelSlice.actions;

export const selectLabels = (state) => state.label.labels;

export default labelSlice.reducer;
