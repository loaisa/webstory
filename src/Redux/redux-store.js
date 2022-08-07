import {configureStore} from "@reduxjs/toolkit";
import UsersReducer from "./UsersReducer";

const store = configureStore({
    reducer:{
        usersPage: UsersReducer,
    }
})

export default store