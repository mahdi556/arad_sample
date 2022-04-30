import { useReducer } from "react";
import NormalAdContext from "./NormalAdContext";
import normalAdReducer from "./normalAdReducer";

// const initialData = {
//   userImage: "",
//   type: "",
//   userImageFile: {},
//   userVideo: "",
//   name: "",
//   companyId: "",
//   companyName: "",
//   fieldCheck: false,
//   stepClick: false,
//   socials: {
//     twitter: "",
//     instagram: "",
//     youtube: "",
//     dribble: "",
//   },
//   birthday: {
//     day: "",
//     month: "",
//     year: "",
//   },
//   step: 1,
//   title: "",
//   entitle: "",
//   lastname: "",
//   Ename: "",
//   Elastname: "",
//   corporateType: 1,
//   sex: {
//     id: "",
//     fa: "",
//   },
//   married: 1,
//   insurrance: 1,
//   province: {
//     id: "",
//     fa: "",
//   },
//   city: {
//     id: "",
//     fa: "",
//   },
//   jobCategory: {
//     id: "",
//     fa: "",
//   },
//   workHour: {
//     fa: { from: "", to: "" },
//   },
//   ageRange: {
//     fa: { from: "", to: "" },
//   },
//   salaryType: {
//     id: "",
//     fa: "",
//   },
//   corporateTime: {
//     id: "",
//     fa: "",
//   },
//   salary: {
//     fa: { from: "", to: "" },
//     en: { from: "", to: "" },
//   },
//   cellphone: "",
//   whatsapp: "",
//   telegram: "",
//   email: "",
//   description: "",
//   langExpert: [],
//   softExpert: [],
//   experiences: [],
//   degree: [],
//   sampleEx: [],
//   cellphone: "",
//   whatsapp: "",
//   telegram: "",
//   email: "",
// };


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
  entitle: "",
  name: "",
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
    salaryType: {
    id: "",
    fa: "",
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
  cellphone: "",
  whatsapp: "",
  telegram: "",
  email: "",
};

const NormalAdProvider = (props) => {
  const [data, dispatch] = useReducer(normalAdReducer, initialData);
  return (
    <NormalAdContext.Provider value={{ data, dispatch }}>
      {props.children}
    </NormalAdContext.Provider>
  );
};

export default NormalAdProvider;
