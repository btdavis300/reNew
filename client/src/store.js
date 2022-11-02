import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./features/reducers/newsSlice";
import popularNewsReducer from "./features/reducers/popularNewsSlice";
import newsTopicReducer from "./features/reducers/newsTopicSlice";
import topicTitleReducer from "./features/reducers/topicTitleSlice";

const store = configureStore({
    reducer: {
        newsArticles: newsReducer,
        popularNews: popularNewsReducer,
        newsTopic: newsTopicReducer,
        topicTitle: topicTitleReducer,
    },
});

export default store;