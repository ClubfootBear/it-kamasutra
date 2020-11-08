import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, setAuthData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()

        // usersApi.tookAuthData().then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login,} = data.data;
        //         this.props.setAuthData(id, email, login,);
        //     }
        // });

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then( response => {
        //     // debugger;
        //     if (response.data.resultCode === 0) {
        //         let {id,email, login, } = response.data.data;
        //         this.props.setAuthData(id,email, login,);
        //     }
        // });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthData, getAuthData})(HeaderContainer);