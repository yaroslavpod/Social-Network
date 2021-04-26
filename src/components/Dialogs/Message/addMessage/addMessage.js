import classes from "./AddMessage.module.css"
import React from "react";
import {addMessageActionCreator, updateLetterMessActionCreator} from "../../../../redux/dialogs-reducer";


const AddMessage = (props) => {

    let addMessage = (e) => {
        props.addMessage()
        if (e.key === 'Enter') {
            props.addMessage();
        }
        e.preventDefault();

    }
    let addMessageEnter = (event) => {
        if (event.key === 'Enter') {
            props.addMessage();
        }
    }
    let onAreaChange = (e) => {
        let messElement = e.target.value;
        props.onAreaChange(messElement);
    }
    return (
        <div className={classes.form}>
            <div>
                <textarea onChange={onAreaChange} cols="75" rows="2" value={props.newMessage}
                          onKeyPress={addMessageEnter}/>
            </div>
            <div className={classes.addMessage}>
                <button onClick={addMessage}>
                    Отправить
                </button>
            </div>
        </div>);
}
export default AddMessage;