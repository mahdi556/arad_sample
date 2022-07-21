import { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "./userReducer";

const initialData = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    auth: false,
    role:[],
    signUp:false
  },
};

const UserProvider = (props) => {
  const [data, dispatch] = useReducer(userReducer, initialData);
  return (
    <UserContext.Provider value={{ data, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
