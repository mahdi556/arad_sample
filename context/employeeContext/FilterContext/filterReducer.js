const filterReducer = (state, action) => {
  switch (action.type) {
    case "ins":
      return { ...state, ins: action.payload };
    case "military":
      return { ...state, military: action.payload };
    case "experience":
      return { ...state, experience: action.payload };
    case "vip":
      return { ...state, vip: action.payload };
  }

};
export default filterReducer;
