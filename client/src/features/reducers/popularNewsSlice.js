import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk("popularNews/fetchPopular", () => {
    return fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr")
        .then((response) => response.json())
        .then((data) => data.results);
});

const popularNewsSlice = createSlice({
    name: "popularNews",
    initialState: {
        entities: [],
    },
    reducers: {},
    extraReducers: {
        [fetchPopular.fulfilled](state, action) {
            state.entities = action.payload;
        }
    }
})

export default popularNewsSlice.reducer;