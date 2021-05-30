import {Suspense} from "react";
import Preloader from "../components/common/Preloader/Preloader";
import * as React from "react";

export const withSuspensePreloader = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>)
    }
}