const normalAdReducer = (state, action) => {
  switch (action.type) {
    case "step":
      return { ...state, step: action.payload };
    case "userImage":
      return { ...state, userImage: action.payload };
    case "userImageFile":
      return { ...state, userImageFile: action.payload };
    case "userVideo":
      return { ...state, userVideo: action.payload };
    case "type":
      return { ...state, type: action.payload };

    case "title":
      return { ...state, title: action.payload };

    case "sex":
      return {
        ...state,
        sex: { fa: action.payload.fa, id: action.payload.id },
      };
    case "married":
      return { ...state, married: action.payload };
    case "insurrance":
      return { ...state, insurrance: action.payload };
    case "province":
      return {
        ...state,
        province: { fa: action.payload.fa, id: action.payload.id },
      };
    case "city":
      return {
        ...state,
        city: { fa: action.payload.fa, id: action.payload.id },
      };
    case "jobCategory":
      return {
        ...state,
        jobCategory: { fa: action.payload.fa, id: action.payload.id },
      };
    case "corporateType":
      return {
        ...state,
        corporateType: action.payload,
      };
    case "salary-fa-from":
      return {
        ...state,
        salary: {
          ...state.salary,
          fa: { to: state.salary.fa.to, from: action.payload },
        },
      };
    case "salary-fa-to":
      return {
        ...state,
        salary: {
          ...state.salary,
          fa: { from: state.salary.fa.from, to: action.payload },
        },
      };
    case "description":
      return { ...state, description: action.payload };
    case "cellphone":
      return { ...state, cellphone: action.payload };
    case "whatsapp":
      return { ...state, whatsapp: action.payload };
    case "telegram":
      return { ...state, telegram: action.payload };
    case "email":
      return { ...state, email: action.payload };
  }
};
export default normalAdReducer;
