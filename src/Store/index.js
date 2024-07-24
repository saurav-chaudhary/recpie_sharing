import {configureStore} from "@reduxjs/toolkit";

import { formReducer,addserving,addtime,addrecpieName,addingridentdata,addRecord,addingridentname } from "./Slice/FormSlice";

const store = configureStore({
    reducer:{
        form:formReducer
    }
})

export {store,addRecord,addserving,addtime,addrecpieName,addingridentdata,addingridentname}
