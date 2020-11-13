import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Input} from "../FormsControl/Formscontrol";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {letLogin} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import style from "../FormsControl/Formscontrol.module.css"


const LoginForm = (props) => {
    return <div>
        
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'} name={'email'} component={Input} validate={required}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={Input} validate={required}
                        type={"password"}
            /></div>
            <div><Field component={Input} name={'rememberMe'} type="checkbox"/> rememberMe</div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'Login'
    })(LoginForm)

const Login = (props) => {
    const onSubmit = (dataForm) => {
        props.letLogin(dataForm.email, dataForm.password, dataForm.rememberMe)
    }

    if(props.isAuth) return (
        <Redirect to={"/profile"} />
    )

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/></div>
    )
        
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {letLogin})(Login) ;