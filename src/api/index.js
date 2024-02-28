import axios from "axios"

const BASE = import.meta.env.VITE_BASE_URL

export const ApiPost = (url, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE + url, userData)
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
export const ApiGet = (url, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE + url, userData)
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
export const ApiPut = (url, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BASE + url, userData)
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
