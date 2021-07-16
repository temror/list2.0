import React from "react";
import c from './../List.module.scss'
import UsersSortContainer from "./UsersSort/UsersSortContainer";

let UsersList = (props) =>{
    return(
        <div className={c.list}>
            <table>
                <UsersSortContainer/>
                    {props.users.slice(
                        props.pageLength * (props.currentPage - 1),
                        props.pageLength * (props.currentPage) - 1
                    ).map(u=>(
                        <tr
                            className={
                                u.phone === props.selectedUser.phone
                                && c.activeClass
                            }
                            onClick={() => {
                                props.showUserInfo(u)
                            }}
                        >
                            <td>{u.id}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                        </tr>
                        )
                    )}
            </table>
        </div>
    )
}

export default UsersList