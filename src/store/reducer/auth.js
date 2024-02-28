import * as actions from "../actions/auth"

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) ?? [],
  token: JSON.parse(localStorage.getItem("token")) ?? null,
  currentUser: JSON.parse(localStorage.getItem("current-user")) ?? {},
}
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_INFO:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case actions.UPDATE_USERS:
      // console.log(action.payload)
      return {
        ...state,
        users: action.payload,
      }
    case actions.SET_LOGGED_IN_USER:
      // console.log(action.payload)
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default AuthReducer
