import * as React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../helpers/validators/validators";
import {Input} from "../common/FormComponents/FormComponents";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from "../common/FormComponents/FormComponent.module.css"

const maxlength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"email"} name={"email"} component={Input}  validate={[requiredField,maxlength20]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"password"} name={"password"}  component={Input} validate={[requiredField]}/>
            </div>
            <div className={style.checkBox}>
                <Field type={"checkbox"} id="checkbox_id" name={"rememberMe"} component={Input}/>
                <label htmlFor="checkbox_id">Запомнить вас?</label>
            </div>
            {props.error && <div className={style.formSummaryError} >
                {props.error}
            </div>}
            <div>
                <button type={"submit"} >Login</button>
            </div>
        </form>
    )
}
let ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.authMenu.isAuth,
    }
}
export default connect(mapStateToProps,{
    login,
    logout
})(Login);

