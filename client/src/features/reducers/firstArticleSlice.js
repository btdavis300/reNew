import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFirst = createAsyncThunk("newsArticles/fetchNews", () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr")
        .then((response) => response.json())
        .then((data) => data.results);
});

const firstArticleSlice = createSlice({
    name: "firstArticle",
    initialState: {
        homePageArticle: {},
    },
    reducers: {},
    extraReducers: {
        [fetchFirst.fulfilled](state, action) {
            state.homePageArticle = action.payload[0];
        }
    }
})

export default firstArticleSlice.reducer;