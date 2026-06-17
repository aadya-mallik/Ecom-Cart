import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice(
    {
        name: "counter",
        initialState:{
            count:0,
        },
        reducers:{
            increment: (state, reqData) => {
                state.count += 1
                //reqData = { payload:anydata}
            },
            decrement: (state) => {
                state.count -= 1
            },
        },
    }
)

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer