import React from "react";
import {connect} from "react-redux";
import {changeCurrentPage} from "../../../redux/redusers/list-reduser";
import UsersPagination from "./UsersPagination";

class UsersPaginationContainer extends React.Component {
    render() {
        return (
            <UsersPagination
                currentPage = {this.props.currentPage}
                pageLength = {this.props.pageLength}
                changeCurrentPage = {this.props.changeCurrentPage}
                users = {this.props.users}
                sizeIsSmall = {this.props.sizeIsSmall}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        currentPage: state.list.currentPage,
        pageLength: state.list.pageLength,
        users: state.list.users,
        sizeIsSmall: state.list.sizeIsSmall
    }
}

export default connect(mapStateToProps,
    {changeCurrentPage})(UsersPaginationContainer)