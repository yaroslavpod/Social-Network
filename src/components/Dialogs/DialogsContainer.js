import classes from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessage from "./Message/addMessage/addMessage";
import {addMessage, onAreaChange} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";


/*const DialogsContainer = (props) => {


    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let dispatch = store.dispatch;
            let addMessageEnter = (event) => {
                if (event.key === 'Enter') {
                    dispatch(addMessageActionCreator());
                }
            }
            let addMessage = () => {
                dispatch(addMessageActionCreator());

            }
            let onAreaChange = (e) => {
                dispatch(updateLetterMessActionCreator(e));
            }
            return <Dialogs dialogsData={state.dialogsPage.dialogsData} newMessage={state.dialogsPage.newMessage}
                            messageData={state.dialogsPage.messageData}
                            addMessage={addMessage} addMessageEnter={addMessageEnter} onAreaChange={onAreaChange}/>
        }
        }
    </StoreContext.Consumer>;

}*/


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessage: state.dialogsPage.newMessage,
        messageData: state.dialogsPage.messageData
    }
}


const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    onAreaChange
})(Dialogs);
export default DialogsContainer;