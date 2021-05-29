import classes from "./Users.module.css";
import * as React from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User/User";


const Users = ({totalUsersCount, pageSize, currentPage, onPageModed,portionSize, ...props}) => {

    return <div className={classes.wrapper}>
        <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                    onPageModed={onPageModed} portionSize={portionSize}/>
        {
            props.usersData.map((el) => <User user={el} {...props} key={el.id}/>)
        }
    </div>
}

export default Users;
