import React from "react";
import c from './AddUser.module.scss'

let AddUser = (props) => {
    return (
        <div className={c.addUser}>
            <button className={c.addButton} onClick={() => {
                props.showForm(true)
            }}
            >Добавить пользователя</button>

            <form className={props.state.formVisibility ? c.hiddenForm : c.hiddenClass} onSubmit="return false">

                <h3>Введите данные:</h3>

                <span className={c.close} onClick={() => {
                    props.showForm(false)
                }}>x</span>

                {Object.keys(props.state.textType).map(t => (<>
                    <span>{t}</span>
                    <input type="text"
                           value={props.state.textType[t]}
                           onChange={(event) => {
                               props.changeFormText(event, [t])
                           }}
                           onBlur={() => {
                               props.checkFormText(t, props.state.textType[t])
                           }}
                    />
                    <span className={
                        props.state.errText[t]
                            ? c.hiddenClass
                            : c.errMess
                    }>*{props.state.errMess[t]}</span>
                </>))}

                <button type='button'
                        disabled={!props.state.errText.id
                        || !props.state.errText.firstName
                        || !props.state.errText.lastName
                        || !props.state.errText.email
                        || !props.state.errText.phone
                        }
                        onClick={
                            props.state.textType.id === ''
                            || props.state.textType.firstName === ''
                            || props.state.textType.lastName === ''
                            || props.state.textType.email === ''
                            || props.state.textType.phone === ''
                                ? (e) => {
                                    props.changeFormValid(false);
                                    e.preventDefault()
                                }
                                : (e) => {
                                    props.addUser(props.state.textType);
                                    props.showForm(false)
                                    e.preventDefault()
                                }}
                        value='Отправить'>Отправить
                </button>
                <span
                    className={props.state.formValid
                        ? c.hiddenClass
                        : c.errMess}
                >*Заполните все поля</span>
            </form>
        </div>
    )
}

export default AddUser