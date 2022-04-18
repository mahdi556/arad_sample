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
  companyId: "",
  fieldCheck: false,
  stepClick: false,
  type: "",
  step: 1,
  title: "",
  companyName: "",
  lastname: "",
  Ename: "",
  Elastname: "",
  corporateType: 1,
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
  sex: {
    id: "",
    fa: "",
  },

  married: 1,
  insurrance: 1,
  province: {
    id: "",
    fa: "",
    en: "",
  },
  city: {
    id: "",
    fa: "",
    en: "",
  },
  jobCategory: {
    id: "",
    fa: "",
    en: "",
  },
  salary: {
    fa: { from: "", to: "" },
    en: { from: "", to: "" },
  },
  workHour: {
    fa: { from: "", to: "" },
  },
  corporateTime: {
    id: "",
    fa: "",
  },
  ageRange: {
    fa: { from: "", to: "" },
  },
  experiences: [],
  degree: [],
  langExpert: [],
  langExpertEn: [],
  softExpert: [],
  softExpertEn: [],
  sampleEx: [],
  adComment: "",
  description: "",
  progressBar: {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
  },
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
