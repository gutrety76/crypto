import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    operations: {}

}
export const HistorySlice = createSlice({
    name: "historySlice",
    initialState,
    reducers: {
        setHistory(state,action){
            state.operations = action.payload
        }


    }
})
export const { setHistory} = HistorySlice.actions

export default HistorySlice.reducer
