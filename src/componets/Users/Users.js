//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/


import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/not_found.png';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            // debugger;
            this.props.setUsers(response.data.items)
        });

    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
    //             // debugger;
    //             this.props.setUsers(response.data.items)
    //         });
    //     }
    // }



    render() {
        return (
            <div>
                <button onClick={this.getUsers}>GetUsers</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.imgsize}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}> Unfollow </button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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




}

export default Users;