import { createSlice } from "@reduxjs/toolkit";

const showArticleSlice = createSlice({
    name: "showArticle",
    initialState:{
        set: false
    },
    reducers: {
        setShowArticle(state, action){
            state.set = action.payload;
        }
    }
})

export const { setShowArticle } = showArticleSlice.actions;

export default showArticleSlice.reducer;