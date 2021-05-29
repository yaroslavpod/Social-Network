import classes from "./ProfileStatus.module.css"
import * as React from "react";
import {useState,useEffect} from "react";


const ProfileStatusWithHooks = ({updateUserStatus,...props}) => {

    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    const activatedEditMode =()=>{
        setEditMode(true)
    }
    const deactivatedEditMode =()=>{
        setEditMode(false);
        updateUserStatus(status);
    }
    const handleFocus = (e) => {
        e.currentTarget.select();
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        if(status !== props.status){
            setStatus(props.status)
        }
    },[props.status])



    return (
        <div className={classes.status}>
            {!editMode &&
            <div>
                <span onClick={activatedEditMode}>{props.status || "---"}</span>
            </div>
            }
            {editMode  &&
            <div>
                <input  onChange={onStatusChange} value={status}  onBlur={deactivatedEditMode} autoFocus={true} onFocus={handleFocus} />

            </div>
            }

        </div>)

}

export default ProfileStatusWithHooks