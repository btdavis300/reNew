import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./features/reducers/newsSlice";
import firstArticleReducer from "./features/reducers/firstArticleSlice";
import firstImageReducer from "./features/reducers/firstImageSlice";

const store = configureStore({
    reducer: {
        newsArticles: newsReducer,
        firstArticle: firstArticleReducer,
        firstImage: firstImageReducer
    },
});

export default store;