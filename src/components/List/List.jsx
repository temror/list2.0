import React from "react";
import c from './List.module.scss'
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersPaginationContainer from "./UsersPagination/UsersPaginationContainer";

let List = (props) =>{
    return(
        <div className={c.list}>
            <UsersPaginationContainer/>
            <UsersListContainer/>
        </div>
    )
}

export default List