import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk("articleComments/fetchComments", (article_url) => {
    return fetch(`http://localhost:3000/article_comments?article_url=${article_url}`)
        .then((response) => response.json())
        .then((data) => data);
});

const articleCommentsSlice = createSlice({
    name: "articleComments",
    initialState: {
        entities: [],
    },
    reducers: {},
    extraReducers: {
        [fetchComments.fulfilled](state, action) {
            state.entities = action.payload;
        }
    }
})

export default articleCommentsSlice.reducer;