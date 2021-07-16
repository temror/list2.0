import React from "react";
import {connect} from "react-redux";
import UsersSort from "./UsersSort";
import {onSort, setUsers} from "../../../../redux/redusers/list-reduser";

class UsersSortContainer extends React.Component{
    sortType = ['id', 'firstName', 'lastName', 'email', 'phone']
    render() {
        return(
            <UsersSort
                sortType = {this.sortType}
                sortDirection = {this.props.sortDirection}
                users = {this.props.users}
                selectedSortType = {this.props.selectedSortType}
                onSort = {this.props.onSort}
                setUsers = {this.props.setUsers}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        sortDirection: state.list.sortDirection,
        users: state.list.users,
        selectedSortType: state.list.selectedSortType
    }
}

export default connect(mapStateToProps,{onSort,setUsers})(UsersSortContainer)