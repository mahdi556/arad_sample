import { useReducer } from "react";
import ResumeContext from "./ResumeContext";
import resumeReducer from "./resumeReducer";
const initialData = {
  user_id: "",
  userImage: "",
  userImageFile: {},
  userVideo: "",
  socials: [],
  other_socials:[],
  companyId: "",
  fieldCheck: false,
  stepClick: false,
  type: "",
  step: 1,
  title: "",
  entitle: "",
  name: "",
  companyId: "",
  companyName: "",
  lastname: "",
  Ename: "",
  Elastname: "",
  corporateType: 1,
  military: false,
  birthday: {
    day: "",
    month: "",
    year: "",
  },
  salaryType: {
    id: "",
    fa: "",
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
  benefits:[],
  salary: {
    fa: { from: "", to: "" },
    en: { from: "", to: "" },
  },
  salaryAgree: false,
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
  cellphone: "",
  whatsapp: "",
  telegram: "",
  email: "",
  military: false,
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
