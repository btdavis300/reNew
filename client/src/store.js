import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./features/reducers/newsSlice";
import popularNewsReducer from "./features/reducers/popularNewsSlice";
import newsTopicReducer from "./features/reducers/newsTopicSlice";
import topicTitleReducer from "./features/reducers/topicTitleSlice";
import articleReducer from "./features/reducers/articleSlice";
import showArticleReducer from "./features/reducers/showArticleSlice";

const store = configureStore({
    reducer: {
        newsArticles: newsReducer,
        popularNews: popularNewsReducer,
        newsTopic: newsTopicReducer,
        topicTitle: topicTitleReducer,
        article: articleReducer,
        showArticle: showArticleReducer
    },
});

export default store;