import axios from "axios";
const instanse = axios.create({
  // baseURL: "http://192.168.1.102:8000/api/",
  // baseURL:process.env.SERVER,
  // baseURL:'https://chiteit-laravel.iran.liara.run/api',
  baseURL:'http://192.168.1.102:8000/api/'
});

export default instanse;
