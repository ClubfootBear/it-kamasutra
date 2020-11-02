import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1063-CUSA15547_00-AV00000000000022/image?w=960&h=960&bg_color=000000&opacity=100&_version=00_09_000',
                    name: 'Vasay',
                    status: 'We are Champions!',
                    locations: {city: 'Tmn', country: 'RU'},
                },
                {
                    id: 2,
                    followed: true,
                    url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1063-CUSA15547_00-AV00000000000022/image?w=960&h=960&bg_color=000000&opacity=100&_version=00_09_000',
                    name: 'Misha',
                    status: 'We are Champions!',
                    locations: {city: 'Tmn', country: 'RU'},
                },
                {
                    id: 3,
                    followed: false,
                    url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1063-CUSA15547_00-AV00000000000022/image?w=960&h=960&bg_color=000000&opacity=100&_version=00_09_000',
                    name: 'Katya',
                    status: 'We are Champions!',
                    locations: {city: 'Ekb', country: 'RU'},
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.url} className={s.imgsize}/>
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
                        <div>{u.locations.city}</div>
                        <div>{u.locations.country}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;