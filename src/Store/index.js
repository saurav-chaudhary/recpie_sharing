import {configureStore} from "@reduxjs/toolkit";

import { formReducer,addserving,addtime,addrecpieName,addingridentdata,addRecord,addingridentname,clearIngrediant,addImageUrl,changeAbout } from "./Slice/FormSlice";

const store = configureStore({
    reducer:{
        form:formReducer
    }
})

console.log(store.getState());
export {store,addRecord,addserving,addtime,addrecpieName,addingridentdata,addingridentname,clearIngrediant,addImageUrl,changeAbout}
