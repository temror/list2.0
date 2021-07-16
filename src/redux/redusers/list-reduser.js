import {getUsersApi} from "../../api/Api";

const CHANGE_NUMBER = 'CHANGE_NUMBER'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const IS_FETCHING = 'IS_FETCHING'
const ADD_USER = 'ADD_USER'
const SHOW_USER_INFO = 'SHOW_USER_INFO'
const ON_SORT = 'ON_SORT'
const ON_SEARCH = 'ON_SEARCH'
const CREATE_COPY = 'CREATE_COPY'

let initialState = {
    users: [],
    usersCopy: [],
    usersNumber: 32,
    sizeIsSmall: true,
    currentPage: 1,
    pageLength: 50,
    isFetching: false,
    //Информация о пользователе
    selectedUser: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
            streetAddress: '',
            city: '',
            state: '',
            zip: ''
        },
        description: ''
    },
    userVisibility: false,
    //Фильтрация
    selectedSortType: '',
    sortDirection: true
}

let listReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case CHANGE_NUMBER: {
            return {
                ...state,
                usersNumber: action.usersNumber,
                sizeIsSmall: action.sizeIsSmall
            }
        }
        case SET_USERS: {
            debugger
            return {
                ...state,
                users: [...action.users]
            }
        }
        case CREATE_COPY: {
            debugger
            return {
                ...state,
                usersCopy: [...action.users]
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        //Кейс сортировки
        case ON_SORT: {
            debugger
            for (let key in state.selectedUser) {
                if (key === action.selectedSortType) {
                    return {
                        ...state,
                        users: state.users.sort((a, b) =>
                            action.selectedSortType === state.selectedSortType
                            ?action.sortDirection
                                ? a[key] > b[key] ? 1 : -1
                                : a[key] < b[key] ? 1 : -1
                        :a[key] > b[key] ? 1 : -1),
                        selectedSortType: action.selectedSortType,
                        sortDirection: action.selectedSortType === state.selectedSortType
                            ? !action.sortDirection
                            : false

                    }
                }
            }
            return state
        }
        //Кейс поиска
        case ON_SEARCH:{
            return {
                ...state,
                users: state.users.filter(user=>user.firstName.includes(action.text))
            }
        }
        //Кейс формы
        case ADD_USER: {
            return {
                ...state,
                users: [
                    {
                        id: action.formText.id,
                        firstName: action.formText.firstName,
                        lastName: action.formText.lastName,
                        email: action.formText.email,
                        phone: action.formText.phone,
                        address: {
                            ...state.address,
                            streetAddress: '-',
                            city: '-',
                            state: '-',
                            zip: '-'
                        },
                        description: '-'
                    },
                    ...state.users
                ]
            }
        }
        //Кейс отображения информации пользователя
        case SHOW_USER_INFO: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    id: action.userInfo.id,
                    firstName: action.userInfo.firstName,
                    lastName: action.userInfo.lastName,
                    email: action.userInfo.email,
                    phone: action.userInfo.phone,
                    address: {
                        ...state.selectedUser.address,
                        streetAddress: action.userInfo.address.streetAddress,
                        city: action.userInfo.address.city,
                        state: action.userInfo.address.state,
                        zip: action.userInfo.address.zip
                    },
                    description: action.userInfo.description
                },
                userVisibility: true
            }
        }
        default: {
            return state
        }
    }
}

export const changeNumber = (usersNumber, sizeIsSmall) => {
    return {type: CHANGE_NUMBER, usersNumber, sizeIsSmall}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const changeCurrentPage = (currentPage) => {
    return {type: CHANGE_CURRENT_PAGE, currentPage}
}
export const isFetching = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}
export const createCopy = (users) =>{
    return {type: CREATE_COPY, users}
}
//AC формы
export const addUser = (formText) => {
    return {type: ADD_USER, formText}
}
//AC поиска
export const onSearch = (text) =>{
    return {type: ON_SEARCH, text }
}
//AC отображения информации
export const showUserInfo = (userInfo) => {
    return {type: SHOW_USER_INFO, userInfo}
}
//AC сортировки
export const onSort = (selectedSortType, sortDirection) => {
    debugger
    return {type: ON_SORT, selectedSortType, sortDirection}
}

export const getUsers = (usersNumber, sizeIsSmall) => dispatch => {
    debugger
    dispatch(isFetching(true))
    getUsersApi(usersNumber).then(data => {
        dispatch(isFetching(false))
        dispatch(changeNumber(usersNumber, sizeIsSmall))
        dispatch(setUsers(data.data))
        dispatch(createCopy(data.data))
    })
}

export default listReducer