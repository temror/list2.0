import loader from "../images/loader.svg";
import c from "./Preloader.module.scss";
import React from "react";

const Preloader = () =>
{
    return(
        <img src={loader} className={c.loader}></img>
    )
}

export default Preloader