import { useReducer } from "react";
import FilterContext from "./FilterContext";
import filterReducer from "./filterReducer";

const initialData = {
  ins: false,
  military: false,
  experience: false,
  vip: false,
  agreeType: {
    status: false,
    value: "",
  },
  agreeTime: {
    status: false,
    value: "",
  },
  sex: {
    status: false,
    value: "",
  },
  salary:{
    min:0,
    max:0,
    status:false
  },
  age:{
    min:0,
    max:0,
    status:false
  },
  showFilterBox:false
};

const FilterProvider = (props) => {
  const [data, dispatch] = useReducer(filterReducer, initialData);
  return (
    <FilterContext.Provider value={{ data, dispatch }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
