import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedCurrency: {},
    curForWindow: 20,
    authenticatedState: {
        authenticated: false
    },
    convertedAmount: 0,
    curFrom: "ETH",
    curTo: "USDT",
    lis: [],
    currentPrices: {},
    BTC : 0,
    ETH : 0,
    BNB : 0,
    ADA : 0,
    XRP : 0,
    SOL : 0,
    DOT : 0,
    ETC : 0,
    XLM : 0,
    TRX : 0,
    USDT : 1,
    BUSD : 0,
    DOGE : 0,
    ATOM : 0,
    NEAR : 0,
    amountToConvert: 1,
    checkWal: {},
    notifications:{},
    amountToWithdraw: 0.0
}
export const PaySlice = createSlice({
    name: "paySlice",
    initialState,
    reducers: {
        setLi(state,action){
            state.lis = action.payload
        },
        setNotifications(state,action){
            state.notifications = action.payload
        },
        setCheckWal(state,action){
            state.checkWal = action.payload
        },
        setWallet(state,action){
            state.authenticatedState.user.wallet.wallet = action.payload
        },
        setCurTo(state, action){
            state.curTo = action.payload
        },
        setAmountToConvert(state,action){
            state.amountToConvert = action.payload
        },
        setCurFrom(state, action){
            state.curFrom = action.payload
        },
        setConvertedAmount(state,action){
            state.convertedAmount = action.payload
        },
        setSelectedCurrency(state, action){
            state.selectedCurrency = action.payload
        },
        setSelectedWindowOfCurrency(state, action){
            state.curForWindow = action.payload
        },
        setAuthenticated(state, action){
            state.authenticatedState = action.payload
        },
        setBTC(state, action){
            state.BTC = action.payload
        },

        setETH(state, action){
            state.ETH = action.payload
        },
        setBNB(state, action){
            state.BNB = action.payload
        },
        setUSDT(state, action){
            state.USDT = action.payload
        },
        setBUSD(state, action){
            state.BUSD = action.payload
        },
        setADA(state, action){
            state.ADA = action.payload
        },
        setXRP(state, action){
            state.XRP = action.payload
        },
        setSOL(state, action){
            state.SOL = action.payload
        },
        setDOGE(state, action){
            state.DOGE = action.payload
        },
        setDOT(state, action){
            state.DOT = action.payload
        },
        setETC(state, action){
            state.ETC = action.payload
        },
        setXLM(state, action){
            state.XLM = action.payload
        },
        setATOM(state, action){
            state.ATOM = action.payload
        },
        setNEAR(state, action){
            state.NEAR = action.payload
        },
        setTRX(state, action){
            state.TRX = action.payload
        },
        setConvertedCur(state, action){
            state.convertedCur = action.payload
        },
        setAmountToWithdraw(state, action){
            state.amountToWithdraw = action.payload
        }

    }
})
export const {setLi,setAmountToWithdraw,setNotifications,setAmountToConvert,setCheckWal, setWallet, setCurFrom,setConvertedAmount, setCurTo,setSelectedCurrency,setConvertedCur, setSelectedWindowOfCurrency, setAuthenticated,setCurrentPrices, setBNB, setTRX, setADA, setATOM, setBTC , setBUSD, setDOGE, setDOT, setETC, setETH, setNEAR, setUSDT, setSOL, setXRP, setXLM} = PaySlice.actions

export default PaySlice.reducer
