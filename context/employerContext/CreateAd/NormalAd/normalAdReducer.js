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
    case "social-twitter":
      return {
        ...state,
        socials: { ...state.socials, twitter: action.payload },
      };
    case "social-insta":
      return {
        ...state,
        socials: { ...state.socials, instagram: action.payload },
      };
    case "social-youtube":
      return {
        ...state,
        socials: { ...state.socials, youtube: action.payload },
      };
    case "social-dribble":
      return {
        ...state,
        socials: { ...state.socials, dribble: action.payload },
      };
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
    case "title":
      return { ...state, title: action.payload };

    case "type":
      return { ...state, type: action.payload };
    case "name":
      return { ...state, companyName: action.payload };

    case "stepClick":
      return { ...state, stepClick: action.payload };
    case "fieldCheck":
      return { ...state, fieldCheck: action.payload };
    case "companyName":
      return { ...state, companyName: action.payload };
    case "companyId":
      return { ...state, companyId: action.payload };
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
    case "salaryType":
      return {
        ...state,
        salaryType: { fa: action.payload.fa, id: action.payload.id },
      };
    case "corporateTime":
      return {
        ...state,
        corporateTime: { fa: action.payload.fa, id: action.payload.id },
      };
    case "workHour-fa-from":
      return {
        ...state,
        workHour: {
          ...state.workHour,
          fa: { to: state.workHour.fa.to, from: action.payload },
        },
      };
    case "workHour-fa-to":
      return {
        ...state,
        workHour: {
          ...state.workHour,
          fa: { from: state.workHour.fa.from, to: action.payload },
        },
      };
    case "ageRange-fa-from":
      return {
        ...state,
        ageRange: {
          ...state.ageRange,
          fa: { to: state.ageRange.fa.to, from: action.payload },
        },
      };
    case "ageRange-fa-to":
      return {
        ...state,
        ageRange: {
          ...state.ageRange,
          fa: { from: state.ageRange.fa.from, to: action.payload },
        },
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
    case "langExpert":
      return {
        ...state,
        langExpert: action.payload.data,
      };
    case "softExpert":
      return {
        ...state,
        softExpert: action.payload.data,
      };
    case "experiences":
      return {
        ...state,
        experiences: action.payload.data,
      };
  }
};
export default normalAdReducer;
