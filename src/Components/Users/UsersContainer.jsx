import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Follow, setUsers, unFollow} from "../../Redux/UsersReducer";



let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToPropsFactory = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(Follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToPropsFactory)(Users);

export default UsersContainer