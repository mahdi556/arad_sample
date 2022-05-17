const resumeReducer = (state, action) => {
  
  switch (action.type) {
    case "data":
      return {
        ...state,
        user_id: action.payload.user_id,
        userImage: "",
        userImageFile: {},
        userVideo: "",
        socials: {
          twitter: "",
          instagram: "",
          youtube: "",
          dribble: "",
        },
        companyId: action.payload.companyId,
        fieldCheck: false,
        stepClick: false,
        type: action.payload.type,
        step: action.payload.step,
        title: action.payload.title,
        entitle: action.payload.entitle,
        name: action.payload.name,
        companyName: action.payload.companyName,
        lastname: action.payload.lastname,
        Ename: action.payload.Ename,
        Elastname: action.payload.Elastname,
        corporateType: 1,
        birthday: action.payload.birthday,

        Ebirthday: {
          day: "",
          month: "",
          year: "",
        },
        sex:action.payload.sex,

        married: action.payload.married,
        insurrance: action.payload.insurrance,
        city: action.payload.city,
        province: action.payload.province,
        jobCategory: {
          id: "",
          fa: "",
          en: "",
        },
        salary: action.payload.salary,
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
        experiences:action.payload.experiences,
        degree:  action.payload.degree,
        langExpert: action.payload.langExpert,
        langExpertEn:[],
        softExpert:action.payload.softExpert,
        softExpertEn: [],
        sampleEx: action.payload.sampleEx,
        adComment: "",
        description: action.payload.description,
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
    case "user_id":
      return { ...state, user_id: action.payload };

    case "step":
      return { ...state, step: action.payload };
    case "userImage":
      return { ...state, userImage: action.payload };
    case "userImageFile":
      return { ...state, userImageFile: action.payload };
    case "userVideo":
      return { ...state, userVideo: action.payload };
    case "userVideoFile":
      return { ...state, userVideoFile: action.payload };
    case "stepClick":
      return { ...state, stepClick: action.payload };
    case "fieldCheck":
      return { ...state, fieldCheck: action.payload };
    case "companyId":
      return { ...state, companyId: action.payload };
    case "companyName":
      return { ...state, companyName: action.payload };
    case "type":
      return { ...state, type: action.payload };
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
    case "jobCategory":
      return {
        ...state,
        jobCategory: { fa: action.payload.fa, id: action.payload.id },
      };
    case "title":
      return { ...state, title: action.payload };
    case "entitle":
      return { ...state, entitle: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "military":
      return { ...state, military: action.payload };
    case "lastname":
      return { ...state, lastname: action.payload };
    case "Ename":
      return { ...state, Ename: action.payload };
    case "Elastname":
      return { ...state, Elastname: action.payload };
    case "corporateType":
      return {
        ...state,
        corporateType: action.payload,
      };
    case "corporateTime":
      return {
        ...state,
        corporateTime: { fa: action.payload.fa, id: action.payload.id },
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

    case "experiences":
      return {
        ...state,
        experiences: action.payload.data,
      };
    case "degree":
      return {
        ...state,
        degree: action.payload.data,
      };
    case "langExpert":
      return {
        ...state,
        langExpert: action.payload.data,
      };
    case "langExpertEn":
      return {
        ...state,
        langExpertEn: action.payload.data,
      };
    case "softExpert":
      return {
        ...state,
        softExpert: action.payload.data,
      };
    case "softExpertEn":
      return {
        ...state,
        softExpertEn: action.payload.data,
      };
    case "sampleEx":
      return {
        ...state,
        sampleEx: action.payload.data,
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
    case "salary-en-from":
      return {
        ...state,
        salary: {
          ...state.salary,
          en: { to: state.salary.en.to, from: action.payload },
        },
      };
    case "salary-en-to":
      return {
        ...state,
        salary: {
          ...state.salary,
          en: { from: state.salary.en.from, to: action.payload },
        },
      };
    case "salaryAgree":
      return { ...state, salaryAgree: action.payload };
    case "salaryType":
      return {
        ...state,
        salaryType: { fa: action.payload.fa, id: action.payload.id },
      };

    case "progressBar-c":
      return {
        ...state,
        progressBar: {
          ...state.progressBar,
          c: state.progressBar.c + action.payload,
        },
      };
    case "cellphone":
      return { ...state, cellphone: action.payload };
    case "whatsapp":
      return { ...state, whatsapp: action.payload };
    case "telegram":
      return { ...state, telegram: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "progressBar-reset":
      return {
        ...state,
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
  }
};
export default resumeReducer;
