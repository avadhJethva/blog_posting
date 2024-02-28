export const ExistUser = (users, value) => {
  return users.find((user) => user.Email === value.Email)
}
export const isLoggedIn = () => {
  return !!localStorage.getItem("current-user")
}

export const Logout = () => {
  return localStorage.removeItem("current-user")
}
