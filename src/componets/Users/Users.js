//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/


import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/not_found.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageToShow}`).then( response => {
            // debugger;
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageToShow}`).then( response => {
            // debugger;
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageToShow);

        let pages =[]
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div>
                {pages.map( p => {
                    return <span
                        className={this.props.currentPage === p && s.selectedItem}
                        onClick={(e) => {this.onChangePage(p)}}
                    >{p}</span>
                })}

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
                <button onClick={this.getUsers}>GetUsers</button>
            </div>
        )

    }




}

export default Users;