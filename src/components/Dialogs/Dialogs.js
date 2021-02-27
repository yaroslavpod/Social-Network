import classes from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Yaroslav",src:"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"},
        {id: 2, name: "Vitaliy"},
        {id: 3, name: "Elena"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Mariya"},
        {id: 7, name: "Evgenia"},
    ];
    let dialogsTagData = dialogsData.map((el)=>{
        return <Dialog id={el.id} name={el.name} src={el.src}/>
    });
    let messageData = [
        {id:1, message: "hello"},
        {id:2, message: "My name is Hotteoi"},
        {id:3, message: "Jo"}
    ];
    let messageTagData = messageData.map((el)=>{
        return <Message id={el.id} message={el.message}/>
    });
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsTagData}
            </div>
            <div className={classes.messages}>
                {messageTagData}
            </div>
        </div>

    );

}

export default Dialogs;