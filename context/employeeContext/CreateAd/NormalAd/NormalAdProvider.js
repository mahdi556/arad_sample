import { useReducer } from "react";
import NormalAdContext from "./NormalAdContext";
import normalAdReducer from "./normalAdReducer";

const initialData = {
  userImage: "",
  userImageFile: {},
  userVideo: "",
  step: 1,
  title: "",
  corporateType: 1,
  sex: 1,
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
  salary: {
    fa: { from: "", to: "" },
  },
  cellphone: "",
  whatsapp: "",
  telegram: "",
  email: "",
  description: "",
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
