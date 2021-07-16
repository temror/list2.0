import React from "react";
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {onSearch, setUsers} from "../../../redux/redusers/list-reduser";

class FindUserContainer extends React.Component {
    state = {
        findText: '',
        warning: false,
        usersOnSort: []
    }
    changeFindText = (text) => {
        this.setState({
            findText: text.target.value,
            warning: false,
            usersOnSort: this.props.usersCopy.filter((p) =>
                Object.values(p).some(s => s.toString().toUpperCase().includes(text.target.value.toString().toUpperCase())))
        })
    }
    clearSearch = () => {
        this.setState({
            findText: '',
            warning: false
        })
        this.props.setUsers(this.props.usersCopy)
    }
    showWarning = (warn) =>{
        this.setState({
            warning: warn
        })
    }
    render() {
        debugger
        return (
            <FindUser
                state={this.state}
                changeFindText={this.changeFindText}
                onSearch={this.onSearch}
                setUsers={this.props.setUsers}
                clearSearch={this.clearSearch}
                showWarning={this.showWarning}
            />
        )
    }
}

export default connect((state) => {
    return {
        users: state.list.users,
        usersCopy: state.list.usersCopy
    }
}, {onSearch, setUsers})(FindUserContainer)