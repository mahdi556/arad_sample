const userReducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload };
     
};
}
export default userReducer;
