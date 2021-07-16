import React from "react";
import {connect} from "react-redux";

import ChooseSet from "./ChooseSet";
import {getUsers} from "../../../redux/redusers/list-reduser";

class ChooseSetContainer extends React.Component {
    render() {
        return (
            <ChooseSet
                sizeIsSmall={this.props.sizeIsSmall}
                getUsers={this.props.getUsers}
            />
        )
    }
}

export default connect((state) => {
        return {sizeIsSmall: state.list.sizeIsSmall}
    },
    {getUsers})(ChooseSetContainer)