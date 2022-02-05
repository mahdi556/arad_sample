const resumeReducer = (state, action) => {
  switch (action.type) {
    case "step":
      return { ...state, step: action.payload };
    case "title":
      return { ...state, title: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "lastname":
      return { ...state, lastname: action.payload };
    case "Ename":
      return { ...state, Ename: action.payload };
    case "Elastname":
      return { ...state, Elastname: action.payload };

    case "birthday-d":
      return { ...state, birthday: { ...state.birthday, day: action.payload } };
    case "birthday-m":
      return {
        ...state,
        birthday: { ...state.birthday, month: action.payload },
      };
    case "birthday-y":
      return {
        ...state,
        birthday: { ...state.birthday, year: action.payload },
      };
    case "Ebirthday-d":
      return {
        ...state,
        Ebirthday: { ...state.Ebirthday, day: action.payload },
      };
    case "Ebirthday-m":
      return {
        ...state,
        Ebirthday: { ...state.Ebirthday, month: action.payload },
      };
    case "Ebirthday-y":
      return {
        ...state,
        Ebirthday: { ...state.Ebirthday, year: action.payload },
      };
    case "sex":
      return { ...state, sex: action.payload };
    case "married":
      return { ...state, married: action.payload };
    case "insurrance":
      return { ...state, insurrance: action.payload };
    case "province":
      return {
        ...state,
        province: { name: action.payload.name, id: action.payload.id },
      };
    case "city":
      return {
        ...state,
        city: { name: action.payload.name, id: action.payload.id },
      };
  }
};
export default resumeReducer;
