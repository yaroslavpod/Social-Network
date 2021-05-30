import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


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
        messageData: state.dialogsPage.messageData,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect,
)(Dialogs);

