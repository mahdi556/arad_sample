import { useReducer } from "react";
import FilterContext from "./FilterContext";
import filterReducer from "./filterReducer";

const initialData = {
  ins: false,
  military: false,
  experience:false,
  vip:false
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
