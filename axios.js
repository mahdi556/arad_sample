import axios from "axios";
const instanse =axios.create({
    // baseURL:'http://192.168.1.102:8000/api/'
    baseURL:'https://chitate.laravel.iran.liara.run/api'
})

export default instanse