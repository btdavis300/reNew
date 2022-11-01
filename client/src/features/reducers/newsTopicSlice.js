import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopic = createAsyncThunk("newsTopic/fetchTopic", (topic) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=19RxmrnrTlmkcBHmAjVv9vp82PkJI2tr`)
        .then((response) => response.json())
        .then((data) => data.results);
});


const newsTopicSlice = createSlice({
    name: "newsTopic",
    initialState: {
        entities: [],
    },
    reducers: {},
    extraReducers: {
        [fetchTopic.fulfilled](state, action) {
            state.entities = action.payload;
        },
    }
})

export default newsTopicSlice.reducer;