import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./features/reducers/newsSlice";
import popularNewsReducer from "./features/reducers/popularNewsSlice";
import newsTopicReducer from "./features/reducers/newsTopicSlice";

const store = configureStore({
    reducer: {
        newsArticles: newsReducer,
        popularNews: popularNewsReducer,
        newsTopic: newsTopicReducer,
    },
});

export default store;