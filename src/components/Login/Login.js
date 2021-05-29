import * as React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../helpers/validators/validators";
import {createField, Input} from "../common/FormComponents/FormComponents";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from "../common/FormComponents/FormComponent.module.css"
import Preloader from "../common/Preloader/Preloader";

const maxlength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", [requiredField, maxlength20], Input, {type: "text"})}
            {createField("password", "password", [requiredField], Input, {type: "password"})}
            <div className={style.checkBox}>
                {createField(null, "rememberMe", null, Input, {type: "checkbox", id: "checkbox_id"})}
                <label htmlFor="checkbox_id">Запомнить вас?</label>
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    )
}
let ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth,isLoading}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if(isLoading){
        return <Preloader/>
    } else if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authMenu.isAuth,
        isLoading: state.authMenu.isLoading,
    }
}
export default connect(mapStateToProps, {
    login,
    logout
})(Login);

