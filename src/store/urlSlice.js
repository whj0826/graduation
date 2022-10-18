import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:'127.0.0.1:8080'
}
export const urlSlice = createSlice({
    name:'url',
    initialState
})