import axios from "axios";

export const
    getUsersApi = (usersNumber) => {
        return axios.get(`http://www.filltext.com/?rows=${usersNumber}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`).then(
            response => {
                return response
            })
    }