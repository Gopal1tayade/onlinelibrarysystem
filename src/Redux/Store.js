import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from './bookReducer'

const appStore = configureStore({
    reducer:{
        booksArray: bookReducer,
    },
});


export default appStore;