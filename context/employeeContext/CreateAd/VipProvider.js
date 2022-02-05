import { useReducer } from "react";
import VipContext from "./VipContext";
import vipReducer from "./vipReducer";

const initialData = {
  title: "",
  name: "",
  lastname: "",
  birthday: {
    day: "",
    month: "",
    year: "",
  },
  sex: 1,
  married: 1,
  insurrance: 1,
  province: {
    id:'',
    name:''
  },
  city: {
    id:'',
    name:''
  },
};

const VipProvider = (props) => {
  const [data, dispatch] = useReducer(vipReducer, initialData);
  return (
    <VipContext.Provider value={{ data , dispatch }}>
      {props.children}
    </VipContext.Provider>
  );
};

export default VipProvider;
