import {createSlice} from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        list: [
            {id: 1, title: "YJHD"},
            {id: 2, title: "ZNMD"},
        ],
    },
    reducers: {},
});

export default moviesSlice.reducer;
