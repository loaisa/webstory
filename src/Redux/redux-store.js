import {configureStore} from "@reduxjs/toolkit";
import UsersReducer from "./UsersReducer";

const store = configureStore({
    reducer:{
        userPage: UsersReducer
    }
})

export default store