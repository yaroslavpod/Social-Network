import * as React from 'react'
import classes from "./FormComponent.module.css"
import {Field} from "redux-form";
import {requiredField} from "../../../helpers/validators/validators";


const FormControl =Element=>({input,meta:{touched,error},...props}) =>{
    const hasError = touched && error;
    return (
        <div className={classes.formControl+" "+ (hasError ? classes.error:"")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const createField =(placeholder,name,validators,component,props = {},text)=>{
    return <div> <Field placeholder={placeholder} name={name} component={component}  validate={validators} {...props}/>{text}</div>
}
export const Textarea = FormControl("textarea");
export const Input = FormControl("input");
