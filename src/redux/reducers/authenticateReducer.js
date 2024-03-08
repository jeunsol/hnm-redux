let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("로그인 성공 리듀서");
      return { ...state, id: payload.id, password: payload.password, authenticate: true };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
