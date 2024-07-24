import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
    'name':'form',
    initialState:{
        recpieName:"",
        serving:0,
        time:0,
        ingrident:[],
        addRecord:[],
        ingridentname:''
    },
    reducers:{
        addrecpieName(state,action){
            state.recpieName= action.payload
        },
        addserving(state,action){
            state.serving=action.payload
        },
        addtime(state,action){
            state.time=action.payload
        },
        addingridentdata(state,action){
            state.ingrident.push(action.payload)
        },
        addRecord(state,action){
            state.addRecord.push({
                name:state.recpieName,
                serving:state.serving,
                time: state.time,
                ingrident:state.ingrident
            })
        },
        addingridentname(state,action){
            state.ingridentname=action.payload
        }
       
    }
})

export const {addrecpieName,addingrident,addserving,addtime,addingridentdata,addRecord,addingridentname} = formSlice.actions
export const formReducer = formSlice.reducer