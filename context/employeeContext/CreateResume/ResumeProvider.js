import { useReducer } from "react";
import ResumeContext from "./ResumeContext";
import resumeReducer from "./resumeReducer";

const initialData = {
  step: 1,
  name: "",
  lastname: "",
  Ename: "",
  Elastname: "",
  birthday: {
    day: "",
    month: "",
    year: "",
  },
  Ebirthday: {
    day: "",
    month: "",
    year: "",
  },
  sex: 1,
  married: 1,
  insurrance: 1,
  province: {
    id: "",
    name: "",
    Ename: "",
  },
  city: {
    id: "",
    name: "",
    Ename: "",
  },
  jobCategory: {
    id: "",
    name: "",
    Ename: "",
  },
  experiences:{}
};

const ResumeProvider = (props) => {
  const [data, dispatch] = useReducer(resumeReducer, initialData);
  return (
    <ResumeContext.Provider value={{ data, dispatch }}>
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;