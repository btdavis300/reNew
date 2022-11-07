import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk("newsSearch/fetchSearch", (search) => {
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr`)
        .then((response) => response.json())
        .then((data) => data.response.docs);
});


const newsSearchSlice = createSlice({
    name: "newsSearch",
    initialState: {
        entities: [],
    },
    reducers: {},
    extraReducers: {
        [fetchSearch.fulfilled](state, action) {
            state.entities = action.payload;
        },
    }
})

export default newsSearchSlice.reducer;
