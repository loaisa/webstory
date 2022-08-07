import {createSlice} from "@reduxjs/toolkit";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

const UserSlice = createSlice({
    name: 'UsersPage',
    initialState: {
        users: [
            {
                id: 1,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360',
                followed: false,
                name: 'Zhenya',
                status: 'GEge',
                location: {city: 'Москва', country: 'Россия'}
            },
            {
                id: 2,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360',
                followed: true,
                name: 'Misha',
                status: 'WOW',
                location: {city: 'ЧЕБЫ', country: 'Россия'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360',
                followed: true,
                name: 'valera',
                status: 'GPD',
                location: {city: 'Москва', country: 'Россия'}
            },
            {
                id: 4,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360',
                followed: false,
                name: 'taras',
                status: 'LIEE',
                location: {city: 'ЦИВ', country: 'Россия'}
            },
        ]
    },
    reducers: {
        Follow: (state, userId) => {

            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === userId.payload) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }

        },
        unFollow: (state, userId) => {

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === userId.payload) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        },
        setUsers: (state, action) => {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        },
    }
})

// export const followAC = (userId) => ({type: "FOLLOW", userId})
// export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId})
// export const setUsersAC = (users) => ({type: "SET_USERS", users})
export const {Follow, unFollow, setUsers} = UserSlice.actions
export default UserSlice.reducer