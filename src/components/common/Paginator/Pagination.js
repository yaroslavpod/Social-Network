import classes from "./Pagination.module.css";
import * as React from "react";
import {useState} from "react";

const Pagination = ({totalItemsCount,pageSize,currentPage,onPageModed,portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return <div className={classes.pageNumbers}>
            {portionNumber >1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button>}
            { pages
                .filter(p=>p>= leftPortionPageNumber&&p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={currentPage === p ? classes.active : ""}
                             onClick={(e) => {
                                 onPageModed(p)

                             }}>{p}</span>

            })}
        {
            portionCount>portionNumber&&
            <button onClick={()=>{
            setPortionNumber(portionNumber+1)}
            }>Next</button>
        }
        </div>

}

export default Pagination;
