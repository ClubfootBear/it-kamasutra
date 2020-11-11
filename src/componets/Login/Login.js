import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Input} from "../FormsControl/Formscontrol";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return <div>
        
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={Input} validate={required}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={Input} validate={required}/></div>
            <div><Field component={Input} name={'rememberMe'} type="checkbox"/> rememberMe</div>
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