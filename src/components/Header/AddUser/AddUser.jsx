import React, {useState} from "react";
import c from './AddUser.module.scss'
import {connect} from "react-redux";
import {addUser} from "../../../redux/redusers/list-reduser";

let AddUser = (props) => {
    const [state,setState] = useState(()=> { return{
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
            }})

    let showForm = (formVisibility) =>{
        setState((state)=>{
            return{
                ...state,
                formVisibility: formVisibility,
                textType: {
                    ...state.textType,
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                },
                errText: {
                    ...state.errText,
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true
                },
                formValid: true
            }
        })
    }
    let changeFormValid = (formValid) =>{
        setState((state)=>{
            return{
                ...state,
                formValid: formValid
            }
        })
    }
    let checkFormText = (type,text) =>{
        setState((state)=>{
            return {
                ...state,
                errText: {
                    ...state.errText,
                    [type]: state.errCheck[type](text)
                }
            }})
    }
    let changeFormText = (event,type) =>{
        setState((state)=>{
            return {
                ...state,
                textType: {
                    ...state.textType,
                    [type]: event.target.value
            }
        }})
    }

    return (
        <div className={c.addUser}>
            <button className={c.addButton} onClick={() => {
                showForm(true)
            }}
            >Добавить пользователя</button>

            <form className={state.formVisibility ? c.hiddenForm : c.hiddenClass} onSubmit="return false">

                <h3>Введите данные:</h3>

                <span className={c.close} onClick={() => {
                    showForm(false)
                }}>x</span>

                {Object.keys(state.textType).map(t => (<>
                    <span>{t}</span>
                    <input type="text"
                           value={state.textType[t]}
                           onChange={(event) => {
                               changeFormText(event, [t])
                           }}
                           onBlur={() => {
                               checkFormText(t, state.textType[t])
                           }}
                    />
                    <span className={
                        state.errText[t]
                            ? c.hiddenClass
                            : c.errMess
                    }>*{state.errMess[t]}</span>
                </>))}

                <button type='button'
                        disabled={!state.errText.id
                        || !state.errText.firstName
                        || !state.errText.lastName
                        || !state.errText.email
                        || !state.errText.phone
                        }
                        onClick={
                            state.textType.id === ''
                            || state.textType.firstName === ''
                            || state.textType.lastName === ''
                            || state.textType.email === ''
                            || state.textType.phone === ''
                                ? (e) => {
                                    changeFormValid(false);
                                    e.preventDefault()
                                }
                                : (e) => {
                                    props.addUser(props.state.textType);
                                    showForm(false)
                                    e.preventDefault()
                                }}
                        value='Отправить'>Отправить
                </button>
                <span
                    className={state.formValid
                        ? c.hiddenClass
                        : c.errMess}
                >*Заполните все поля</span>
            </form>
        </div>
    )
}

export default connect(()=>{return true},{addUser})(AddUser)