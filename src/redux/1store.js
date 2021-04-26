import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "hello", likesCount: 34},
                {id: 2, message: "My name is Hotteoi", likesCount: 11},
                {id: 3, message: "Jo", likesCount: 20},
                {id: 4, message: "It's so rainy today", likesCount: 111}
            ],
            newPostElement: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log(
            "Rerendered state"
        );
    },

    getState() {
        return this._state;
    },
    /*get func rerenderEntireTree from index.js using callback*/
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { // action must be prop with attr like {type:'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;