import React from "react";
import {connect} from "react-redux";
import AddUser from "./AddUser";
import {addUser} from "../../../redux/redusers/list-reduser";

class AddUserContainer extends React.Component {

    state = {
        formVisibility: false,
        formValid: true,
        textType: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        errMess: {
            id: 'Введите id цифрами',
            firstName: 'Введите имя латинскими буквами',
            lastName: 'Введите фамилию латинскими буквами',
            email: 'Введите корректный email',
            phone: 'Введите номер вида: (***)***-****'
        },
        errText: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
        },
        errCheck: {
            id(text) {
                return Number.isInteger(Number(text))
            },
            firstName(text) {
                return /^[a-zA-Z]*$/.test(text)
            },
            lastName(text) {
                return /^[a-zA-Z]*$/.test(text)
            },
            email(text) {
                return (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(text)
            },
            phone(text) {
                return (/\(\d{3}\)\d{3}-\d{4}/).test(text)
            }
        }
    }
    showForm = (formVisibility) =>{
        this.setState({
            formVisibility: formVisibility,
            textType: {
                ...this.state.textType,
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            },
            errText: {
                ...this.state.errText,
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phone: true
            },
            formValid: true
        })
    }
    changeFormValid = (formValid) =>{
        this.setState({
            formValid: formValid
        })
    }
    checkFormText = (type,text) => {
        this.setState({
            errText: {
                ...this.state.errText,
                [type]: this.state.errCheck[type](text)
            }
        })
    }
    changeFormText = (event, type) => {
        this.setState({
            textType: {
                ...this.state.textType,
                [type]: event.target.value
            }
        })
    }

    render() {
        return (
            <AddUser
                state={this.state}
                changeFormText={this.changeFormText}
                checkFormText={this.checkFormText}
                changeFormValid={this.changeFormValid}
                showForm={this.showForm}
                addUser={this.props.addUser}
            />
        )
    }
}
export default connect(()=>{return true},{addUser})(AddUserContainer)