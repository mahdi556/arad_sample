const userReducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload };
      case "signUp":
        return { ...state,user:{...state.user,signUp: action.payload} };
     
};
}
export default userReducer;
