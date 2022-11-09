import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentUser = createAsyncThunk("currentUser/fetchCurrentUser", () => {
    return fetch(`http://localhost:3000/logged_in`)
        .then((response) => response.json())
});


const currentUser = createSlice({
    name: "currentUser",
    initialState: {
        entities: {},
    },
    reducers: {},
    extraReducers: {
        [fetchCurrentUser.fulfilled](state, action) {
            state.entities = action.payload;
        },
    }
})


export default currentUser.reducer;