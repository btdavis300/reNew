import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("newsArticles/fetchNews", () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr")
        .then((response) => response.json())
        .then((data) => data.results);
});


const newsSlice = createSlice({
    name: "newsArticles",
    initialState: {
        entities: [],
    },
    reducers: {
        newsUploaded(state, action) {
            state.entities.push(action.payload);
        }
    },
    extraReducers: {
        [fetchNews.fulfilled](state, action) {
            state.entities = action.payload;
        },
    }
})

export const { newsUploaded } = newsSlice.actions;

export default newsSlice.reducer;