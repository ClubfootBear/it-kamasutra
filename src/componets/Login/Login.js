import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


const LoginForm = (props) => {
    return <div>
        
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={"input"}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={"input"}/></div>
            <div><Field component={"input"} name={'rememberMe'} type="checkbox"/> rememberMe</div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'Login'
    })(LoginForm)

const Login = () => {
    const onSubmit = (dataForm) => {
        console.log('dataForm')
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/></div>
    )
        
}

export default Login;