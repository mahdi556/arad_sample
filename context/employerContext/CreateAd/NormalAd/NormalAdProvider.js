import { useReducer } from "react";
import NormalAdContext from "./NormalAdContext";
import normalAdReducer from "./normalAdReducer";

const initialData = {
  userImage: "",
  type:'',
  userImageFile: {},
  userVideo: "",
  name:'',
  companyId:'',
  companyName:'',  
  fieldCheck:false,
  stepClick:false,
  socials: {
    twitter: "",
    instagram: "",
    youtube: "",
    dribble: "",
  },  
  birthday: {
    day: "",
    month: "",
    year: "",
  },
  step: 1,
  title: "",
  corporateType: 1,
  sex: {
    id: "",
    fa: "",
  },
  married: 1,
  insurrance: 1,
  province: {
    id: "",
    fa: "",
  },
  city: {
    id: "",
    fa: "",
  },
  jobCategory: {
    id: "",
    fa: "",
  },
  workHour: {
    fa: {from: "",to: "" },
  },
  ageRange: {
    fa: {from: "",to: "" },
  },
  salaryType: {
    id: "",
    fa: "",
  },
  corporateTime: {
    id: "",
    fa: "",
  },
  salary: {
    fa: { from: "", to: "" },
  },
  cellphone: "",
  whatsapp: "",
  telegram: "",
  email: "",
  description: "",
  langExpert: [],
  softExpert: [],
  experiences: [],
  degree: [],
  sampleEx: [],


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
