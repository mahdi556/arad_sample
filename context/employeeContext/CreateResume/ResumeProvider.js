import { useReducer } from "react";
import ResumeContext from "./ResumeContext";
import resumeReducer from "./resumeReducer";

const initialData = {
  userImage: "",
  userImageFile: {},
  userVideo: "",
  socials: {
    twitter: "",
    instagram: "",
    youtube: "",
    dribble: "",
  },
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
  salary: {
    fa: { from: "", to: "" },
    en: { from: "", to: "" },
  },
  experiences: [],
  degree: [],
  langExpert: [],
  langExpertEn: [],
  softExpert: [],
  softExpertEn: [],
  sampleEx: [],
  adComment:"",
  progressBar:{
    'a':0,
    'b':0,
    'c':0,
    'd':0,
    'e':0,
    'f':0,
    'g':0,
    'h':0,
  }
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
