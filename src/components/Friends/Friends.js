import classes from "./Friends.module.css"
import React from 'react'

const Friends = (props) => {
    return (
      <div className={classes.content}>
          <img src={props.img} alt=""/>
            Friends
      </div>
    );
}

export default Friends;