import React from "react";
import {connect} from "react-redux";
import Description from "./Description";

class DescriptionContainer extends React.Component{
    render() {
        return(
            <Description
            selectedUser={this.props.selectedUser}
            userVisibility = {this.props.userVisibility}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        selectedUser: state.list.selectedUser,
        userVisibility: state.list.userVisibility
    }
}

export default connect(mapStateToProps,)(DescriptionContainer)