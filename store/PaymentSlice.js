import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedPaymentCurrency: "",
    selectedAmount: ""

}
export const PaymentSlice = createSlice({
    name: "paymentSlice",
    initialState,
    reducers: {
        setSelectedPaymentCurrency(state,action){
            state.selectedPaymentCurrency = action.payload
        },
        setSelectedAmount(state,action){
            state.selectedAmount = action.payload
        }


    }
})
export const {setSelectedAmount,setSelectedPaymentCurrency} = PaymentSlice.actions

export default PaymentSlice.reducer
