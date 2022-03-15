import { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "./userReducer";

const initialData = {
  user: {
    id: "",
    firstName: "hamid",
    lastName: "",
    auth: false,
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
