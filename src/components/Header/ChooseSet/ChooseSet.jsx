import React from "react";
import c from './ChooseSet.module.scss'

let ChooseSet = (props) =>{
    return(
        <div className={c.chooseSet}>
                <button
                    className={props.sizeIsSmall&&c.activeButton}
                    onClick={()=>props.getUsers(32,true)}>Маленький набор</button>
                <button
                    className={!props.sizeIsSmall&&c.activeButton}
                    onClick={()=>{props.getUsers(1000,false)}}>Большой набор</button>
        </div>
    )
}

export default ChooseSet