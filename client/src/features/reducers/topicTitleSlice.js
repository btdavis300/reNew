import { createSlice } from "@reduxjs/toolkit";

const topicTitleSlice = createSlice({
    name: "topicTitle",
    initialState: {
        title: ""
    },
    reducers: {
        titleClicked(state, action){
            state.title = action.payload;
        }
    }
})

export const { titleClicked } = topicTitleSlice.actions;

export default topicTitleSlice.reducer;