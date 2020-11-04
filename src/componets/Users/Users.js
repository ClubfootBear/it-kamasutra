//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/

import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/not_found.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {

        let pagesCount = Math.ceil(props.usersCount / props.pageToShow);

        let pages =[]
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {pages.map( p => {
                    return <span
                        className={props.currentPage === p && s.selectedItem}
                        onClick={(e) => {props.onChangePage(p)}}
                    >{p}</span>
                })}

                {
                    props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.imgsize}/>
                            </NavLink>
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
                <button>GetUsers</button>
            </div>
        )
}

export default Users;