import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        entity: []
    },
    reducers: {
        setArticle(state, action){
            state.entity = action.payload;
        }
    }
})

export const { setArticle } = articleSlice.actions;

export default articleSlice.reducer;