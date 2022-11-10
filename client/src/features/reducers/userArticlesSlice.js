import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserArticles = createAsyncThunk("userArticles/fetchUserArticles", (id) => {
    return fetch(`http://localhost:3000/user_archives?user_id=${id}`)
        .then((response) => response.json())
        .then((data) => data);
});

const userArticlesSlice = createSlice({
    name: "userArticles",
    initialState: {
        entities: [],
    },
    reducers: {
        savedArticle(state, action) {
            state.entities = [...state.entities, action.payload];
        }
    },
    extraReducers: {
        [fetchUserArticles.fulfilled](state, action) {
            state.entities = action.payload;
        }
    }
})

export const { savedArticle } = userArticlesSlice.actions;

export default userArticlesSlice.reducer;