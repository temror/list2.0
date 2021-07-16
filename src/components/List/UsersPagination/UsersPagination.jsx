import React from "react";
import c from './UsersPagination.module.scss'

let UsersPagination = (props) =>{
    let pages = []
    for (let i = 0; i < props.users.length/props.pageLength; i++) {
        pages[i] = i + 1;
    }
    return(
        <div className={props.sizeIsSmall ? c.hiddenClass : c.usersPagination}>
            {
                pages.map(p => (
                    <span
                        className={props.currentPage === p && c.selectedPage}
                        onClick={() => {
                            props.changeCurrentPage(p)
                        }}
                    >{p}</span>
                ))}
            <p>Пользователи: {1 + props.pageLength * (props.currentPage - 1)
            } - {props.pageLength * props.currentPage}</p>

        </div>
    )
}

export default UsersPagination