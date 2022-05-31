const filterReducer = (state, action) => {
  switch (action.type) {
    case "showFilterBox":
      return { ...state, showFilterBox: action.payload };
    case "ins":
      return { ...state, ins: action.payload,showFilterBox: true };
    case "military":
      return { ...state, military: action.payload,showFilterBox: true };
    case "experience":
      return { ...state, experience: action.payload ,showFilterBox: true};
    case "vip":
      return { ...state, vip: action.payload,showFilterBox: true };
    case "agreeType":
      return { ...state, agreeType: { status: true, value: action.payload },showFilterBox: true };
    case "agreeTime":
      return { ...state, agreeTime: { status: true, value: action.payload },showFilterBox: true };
    case "agreeTypeCancel":
      return { ...state, agreeType: { status: false, value: "" } ,showFilterBox: true};
    case "agreeTimeCancel":
      return { ...state, agreeTime: { status: false, value: "" } ,showFilterBox: true};
    case "sex":
      return { ...state, sex: { status: true, value: action.payload },showFilterBox: true };
    case "sexCansel":
      return { ...state, sex: { status: false, value: "" } ,showFilterBox: true};
    case "salary":
      return { ...state, salary: action.payload ,showFilterBox: true};
    case "age":
      return { ...state, age: action.payload ,showFilterBox: true};
    case "resetData":
      return {
        ...state,
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
        salary: {
          min: 0,
          max: 0,
          status: false,
        },
        age: {
          min: 0,
          max: 0,
          status: false,
        },
        
      };
  }
};
export default filterReducer;
