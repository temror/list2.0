import React from "react";
import c from './Header.module.scss'
import ChooseSetContainer from "./ChooseSet/ChooseSetContainer";
import AddUser from "./AddUser/AddUser";
import FindUserContainer from "./FindUser/FindUserContainer";
import {connect} from "react-redux";
import {getUsers} from "../../redux/redusers/list-reduser";

class Header extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersNumber, this.props.sizeIsSmall)
    }

    componentDidUpdate() {
        document.getElementById('title').focus()
    }
    state = {
        title: 'Таблица пользователей',
        changeTitle: false
    }
    changeTitle = (c) =>{
        this.setState({
            changeTitle: c
        })
    }
    newTitle = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    render() {
        return (
            <div className={c.Header}>
                <h1 onClick={()=>this.changeTitle(true)} hidden={this.state.changeTitle}>{this.state.title}</h1>
                <input autoFocus={true}
                    id='title'
                       className={c.titleInput}
                       value={this.state.title}
                       hidden={!this.state.changeTitle}
                       onBlur={()=>this.changeTitle(false)}
                       onChange={(e)=>this.newTitle(e)}
                />
                <ChooseSetContainer/>
                <AddUser/>
                <FindUserContainer/>
            </div>)

    }
}

let mapStateToProps = (state) =>{
    return{
        usersNumber: state.list.usersNumber,
        sizeIsSmall: state.list.sizeIsSmall
    }
}

export default connect(mapStateToProps,{getUsers})(Header)