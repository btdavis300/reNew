import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: "alert",
    initialState: {
        set: "hidden",
    },
    reducers: {
        setAlert(state, action) {
            state.set = action.payload;
        },
    },
})

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;