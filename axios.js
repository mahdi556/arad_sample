import axios from "axios";
const instanse =axios.create({
    baseURL:'http://192.168.1.102:8000/api/'
    // baseURL:'https://sahamcard.com/api'
})

export default instanse