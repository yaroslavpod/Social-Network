import classes from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageFormRedux from "./Message/addMessage/addMessage";
import React from 'react'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((el) => {
        return <Dialog id={el.id} name={el.name} key={el.id} src={el.src}/>
    });
    let messageElements = props.messageData.map((el) => {
        return <Message id={el.id} key={el.id} message={el.message}/>
    });
    let addNewMessage =(values)=>{
        props.addMessage(values.newMessageBody);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messages}>
                    {messageElements}
                </div>

                <div className={classes.addMessage}>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>

            </div>
        </div>

    );

}

export default Dialogs;