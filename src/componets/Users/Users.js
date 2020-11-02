import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/not_found.png';

const Users = (props) => {
    //ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                // debugger;
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.imgsize}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}> Unfollow </button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.locations.city"}</div>
                        <div>{"u.locations.country"}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;