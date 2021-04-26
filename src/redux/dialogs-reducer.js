const UPDATE_LETTER_MESS = 'UPDATE-LETTER-MESS';
const ADD_MESS = 'ADD-MESS';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Yaroslav",
            src: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"
        },
        {id: 2, name: "Vitaliy"},
        {id: 3, name: "Elena"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Mariya"},
        {id: 7, name: "Evgenia"},
        {id: 8, name: "Yulia"}
    ],
    messageData: [
        {id: 1, message: "hello"},
        {id: 2, message: "My name is Hotteoi"},
        {id: 3, message: "Jo"}
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESS: {
            /*let copyState = Object.assign({}, state);*/
            return {
                ...state,
                newMessage: '',
                messageData: [...state.messageData, {id: 4, message: state.newMessage}]
            };
        }
        case UPDATE_LETTER_MESS: {
            return {
                ...state,
                newMessage: action.messElement
            };
        }
        default:
            return state;
    }
    return state;
}

export default dialogsReducer;

export const addMessage = () => ({type: ADD_MESS});
export const onAreaChange = (messElement) => ({type: UPDATE_LETTER_MESS, messElement: messElement});