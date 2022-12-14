import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./features/reducers/newsSlice";
import popularNewsReducer from "./features/reducers/popularNewsSlice";
import newsTopicReducer from "./features/reducers/newsTopicSlice";
import newsSearchReducer from "./features/reducers/newsSearchSlice";
import topicTitleReducer from "./features/reducers/topicTitleSlice";
import articleReducer from "./features/reducers/articleSlice";
import showArticleReducer from "./features/reducers/showArticleSlice";
import searchQueryReducer from "./features/reducers/searchQuerySlice";
import signupFormReducer from "./features/reducers/signupFormSlice";
import userReducer from "./features/reducers/userSlice";
import userArticlesReducer from "./features/reducers/userArticlesSlice";
import alertReducer from "./features/reducers/alertSlice";
import articleCommentsReducer from "./features/reducers/articleCommentsSlice";


const store = configureStore({
    reducer: {
        newsArticles: newsReducer,
        popularNews: popularNewsReducer,
        newsTopic: newsTopicReducer,
        newsSearch: newsSearchReducer,
        topicTitle: topicTitleReducer,
        article: articleReducer,
        searchQuery: searchQueryReducer,
        showArticle: showArticleReducer,
        showSignUp: signupFormReducer,
        currentUser: userReducer,
        userArticles: userArticlesReducer,
        alert: alertReducer,
        articleComments: articleCommentsReducer,
    },
});

export default store;