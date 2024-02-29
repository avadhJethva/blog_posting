export const ExistUser = (users, value) => {
  return users.find((user) => user.Email === value.Email)
}
export const isLoggedIn = () => {
  return !!localStorage.getItem("current-user")
}

export const Logout = () => {
  return localStorage.removeItem("current-user")
}

export const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
    )

export const urlToObject = async (image) => {
  const response = await fetch(image)
  const blob = await response.blob()
  const file = new File([blob], "image.jpg", { type: blob.type })
  return file
}

export const formateDate = (dat) => {
  let date = new Date(dat)

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
