import imgLoading from "../../../assets/image/spinner.svg";
import * as React from "react";


const Preloader = () =>{
    return <div>
        <img src={imgLoading}/>
    </div>
}

export default Preloader;