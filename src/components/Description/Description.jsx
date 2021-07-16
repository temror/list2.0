import c from './Description.module.scss'

let Description = (props) =>{
    return(
        <div className={
            !props.userVisibility&& c.hiddenClass
        }>
            <p>Выбран пользователь: <b>{props.selectedUser.firstName} {props.selectedUser.lastName}</b></p>
            <p>Описание: {props.selectedUser.description}</p>
            <p>Адрес проживания: <b>{props.selectedUser.address.streetAddress}</b></p>
            <p>Город: <b>{props.selectedUser.address.city}</b></p>
            <p>Провинция/штат: <b>{props.selectedUser.address.state}</b></p>
            <p>Индекс: <b>{props.selectedUser.address.zip}</b></p>
        </div>
    )
}
export default Description