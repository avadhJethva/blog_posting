import axios from "axios"

export const BASE = import.meta.env.VITE_BASE_URL

function headers() {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
  }
}

const apiCaller = axios.create()
apiCaller.defaults.baseURL = BASE

apiCaller.defaults.headers = {
  ...headers(),
}

apiCaller.defaults.timeout = 30000

export const ApiPost = (url, userData) => {
  return new Promise((resolve, reject) => {
    apiCaller
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
    apiCaller
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
    apiCaller
      .put(BASE + url, userData)
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
export const ApiDelete = (url) => {
  return new Promise((resolve, reject) => {
    apiCaller
      .delete(BASE + url)
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
