import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (obj, {rejectWithValue, fulfillWithValue}) => {
    // console.log(thunkAPI.getState())
    // thunkAPI.dispatch(testAsyncDispatch())
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

        return res.data;
        // return fulfillWithValue("something else");
    } catch (err) {
        // return rejectWithValue("Oops, try again");
        return err;
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        type: "Guest",
        users: [],
        loading: false,
        //test:false
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || "Guest";
        },
        // testAsyncDispatch:(state)=>{
        //     state.test = true
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            console.log("rejected");
        });
    },
});

export const {setType, testAsyncDispatch} = usersSlice.actions;
export default usersSlice.reducer;
