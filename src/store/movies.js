import {createSlice} from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        list: [
            {id: 1, title: "YJHD"},
            {id: 2, title: "ZNMD"},
        ],
    },
    reducers: {
        addMovie: (state, action) => {
            // const newMovie = {id: 3, title: "3 Idoits"};
            state.list = [...state.list, action.payload];
        },
    },
});

export const {addMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
