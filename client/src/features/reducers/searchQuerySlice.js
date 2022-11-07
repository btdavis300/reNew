import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState: {
        entity: []
    },
    reducers: {
        setSearchQuery(state, action) {
            state.entity = action.payload;
        }
    }
})

export const { setSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;