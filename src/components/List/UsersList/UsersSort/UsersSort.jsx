import React from "react";
import c from '../../List.module.scss'

let UsersSort = (props) =>{
    return(
                <tr className={c.list}>
                    {props.sortType.map(t=>(
                        <td
                            onClick={()=>
                            {props.onSort(t,props.sortDirection)
                            &&props.setUsers(props.users)}}
                        >{t}
                            {props.sortDirection
                                ?<span className={props.selectedSortType!==t ? c.hiddenClass:false}>↑</span>
                                :<span className={props.selectedSortType!==t ? c.hiddenClass:false}>↓</span>}
                        </td>
                    ))}
                </tr>
    )
}

export default UsersSort