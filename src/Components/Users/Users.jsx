import React, {useState} from 'react';
import classes from "./Users.module.css";

function Users(props) {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.imgPreview} src={u.photoUrl} alt="#"/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>:
                            <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
            </div>)}
        </div>
    );
}

export default Users;