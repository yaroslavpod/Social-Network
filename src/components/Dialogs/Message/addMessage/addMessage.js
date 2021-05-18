import classes from "./AddMessage.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormComponents/FormComponents";
import {maxLengthCreator, requiredField} from "../../../../helpers/validators/validators";

const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {

    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField,maxLength10]} component={Textarea} name="newMessageBody" placeholder="Enter your message" cols="75" rows="2"  />

            </div>
            <div className={classes.addMessage}>
                <button >
                    Отправить
                </button>
            </div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux;