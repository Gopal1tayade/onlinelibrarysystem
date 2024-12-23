import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:"booksArray",
    initialState: {
        books :[],
        search:'',
    },
    reducers:{
        addbooks: (state , action) =>{
            state.books = action.payload;
        },
        searchbook: (state , action) =>{
            state.search = action.payload;
        },
        addNewBook:(state,action) =>{
            state.books.push(action.payload)
        }
    }
});

export const {addbooks , searchbook ,addNewBook} = bookSlice.actions;

export default bookSlice.reducer;