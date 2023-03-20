import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    curTo: {cur:"BTC", name: "Bitcoin"},
    curFrom: {cur:"BNB", name: "Binance coin"},
    amountTo: 0,
    amountFrom: 0,
    minPrice: 0,
    receive: 0,
    send: 0
}
export const MainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        setReceive(state,action){
            state.receive = action.payload
        },
        setSend(state,action){
            state.send = action.payload
        },
        setMinMaxPrice(state,action){
            state.minPrice = action.payload
        },
        setCurTooo(state,action){
            state.curTo = action.payload
        },
        setCurFrommmm(state,action){
            state.curFrom = action.payload
        },
        setAmounttt(state,action){
            state.amountTo = action.payload
        },
        setAmountFrooom(state,action){
            state.amountFrom = action.payload
        }


    }
})
export const {setAmounttt,setSend,setReceive,setMinMaxPrice,setCurFrommmm,setCurTooo, setAmountFrooom} = MainSlice.actions

export default MainSlice.reducer
