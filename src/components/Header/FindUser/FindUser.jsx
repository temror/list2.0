import React from "react";
import c from './FindUser.module.scss'

let FindUser = (props) => {
    return (
        <div className={c.findUser}>
            <input
                value={props.state.findText}
                onChange={props.changeFindText}
            />
            <button
                className={c.turnBackButton}
                onClick={() => props.clearSearch()}
            >х
            </button>
            <button
                onClick={() =>
                    props.state.findText.length<3
                    ?props.showWarning(true)
                    :props.setUsers(props.state.usersOnSort)

                }
                disabled={props.state.findText === ''}
            >Найти
            </button>
            <p  hidden={!props.state.warning}>Введите более 2-х символов</p>
        </div>
    )
}

export default FindUser