import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    recpieName: "",
    serving: 0,
    time: 0,
    ingrident: [],
    addRecordData: [],
    ingridentname: '',
    imageUrl: "" // Add imageUrl to the state
  },
  reducers: {
    addrecpieName(state, action) {
      state.recpieName = action.payload;
    },
    addserving(state, action) {
      state.serving = action.payload;
    },
    addtime(state, action) {
      state.time = action.payload;
    },
    addingridentdata(state, action) {
      state.ingrident.push(action.payload);
    },
    addRecord(state, action) {
      state.addRecordData.push({
        name: action.payload.recpieName,
        serving: action.payload.serving,
        time: action.payload.time,
        ingrident: action.payload.ingrident,
        imageUrl: action.payload.imageUrl // Include imageUrl in the record
      });
    },
    addingridentname(state, action) {
      state.ingridentname = action.payload;
    },
    clearIngrediant(state, action) {
      state.ingrident = [];
    },
    addImageUrl(state, action) { 
      state.imageUrl = action.payload;
    }
  }
});

export const { 
  addrecpieName,
  addserving,
  addtime,
  addingridentdata,
  addRecord,
  addingridentname,
  clearIngrediant,
  addImageUrl 
} = formSlice.actions;

export const formReducer = formSlice.reducer;
