import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFirstImage = createAsyncThunk("newsArticles/fetchNews", () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr")
        .then((response) => response.json())
        .then((data) => data.results);
});

const firstImageSlice = createSlice({
    name: "firstImage",
    initialState: {
        image: {},
    },
    reducers: {},
    extraReducers: {
        [fetchFirstImage.fulfilled](state, action) {
            state.image = action.payload[0].multimedia[0];
        }
    }
})

export default firstImageSlice.reducer;