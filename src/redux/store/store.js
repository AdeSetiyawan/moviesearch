import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducer/movieReducer";
import logger from "redux-logger";

const store = configureStore({
    reducer:{
        movie : movieReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;