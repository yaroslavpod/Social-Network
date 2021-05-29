import classes from "./Pagination.module.css";
import * as React from "react";

const Pagination = ({totalUsersCount,pageSize,currentPage,onPageModed}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    pagesCount = pagesCount >= 30 ? 10 : pagesCount;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.pageNumbers}>
            {pages.map(p => {
                return <span className={currentPage === p ? classes.active : ""}
                             onClick={(e) => {
                                 onPageModed(p)

                             }}>{p}</span>

            })}
        </div>

}

export default Pagination;
