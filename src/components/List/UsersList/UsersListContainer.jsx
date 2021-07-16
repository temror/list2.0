import React from "react";
import {connect} from "react-redux";
import {getUsers, showUserInfo} from "../../../redux/redusers/list-reduser";
import UsersList from "./UsersList";
import Preloader from "../../../common/Preloader";

class UsersListContainer extends React.Component {
    render() {
        debugger
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <UsersList
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageLength={this.props.pageLength}
                    showUserInfo={this.props.showUserInfo}
                    selectedUser = {this.props.selectedUser}
                />
            </>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.list.users,
        usersNumber: state.list.usersNumber,
        sizeIsSmall: state.list.sizeIsSmall,
        currentPage: state.list.currentPage,
        pageLength: state.list.pageLength,
        isFetching: state.list.isFetching,
        selectedUser: state.list.selectedUser
    }
}

export default connect(mapStateToProps,{getUsers,showUserInfo})(UsersListContainer)