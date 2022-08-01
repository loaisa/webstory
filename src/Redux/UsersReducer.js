import {createSlice} from "@reduxjs/toolkit";
import Profile from "../Components/Profile/Profile";

const UserSlice = createSlice({
    name: 'UsersPage',
    initialState:{
        users:[{id: 1, followed: false, name: 'Zhenya', status:'1', location:{city:'Москва', country:'Россия'}},
            {id: 2, followed: true, name: 'Misha', status:'2', location:{city:'Москва', country:'Россия'}},
            {id: 3, followed: true, name: 'valera', status:'3', location:{city:'Москва', country:'Россия'}},
            {id: 4, followed: false, name: 'taras', status:'4', location:{city:'Москва', country:'Россия'}},]
    },
    reducers:{
        Follow: (state, userId) => {
            let StateCopy = {
                ...state,
                users:
            }
        },
        UnFollow: state => {

        }
    }

})

export const followAC = (userId) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId})
export default UserSlice.reducer