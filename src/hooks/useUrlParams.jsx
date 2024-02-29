import { useSearchParams } from "react-router-dom"

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const getParam = (paramName) => {
    return searchParams.get(paramName)
  }

  const setParam = (paramName, paramValue) => {
    setSearchParams((params) => {
      params.set(paramName, paramValue)
      return params
    })
  }

  const removeParam = (paramName) => {
    setSearchParams((params) => {
      params.delete(paramName)
      return params
    })
  }

  const getAllParams = () => {
    const paramsObject = {}
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value
    }
    return paramsObject
  }

  return {
    getParam,
    setParam,
    removeParam,
    getAllParams,
  }
}

export default useURLParams
