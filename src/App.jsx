import GlobalStyle, { Theme } from "src/globalStyle"
import React from "react"
import RoutesComponent from "routes/RoutesComponent"
import { ThemeProvider } from "styled-components"
import store from "store/Store"
import { Provider } from "react-redux"
import Toast from "component/lib/Toast"

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RoutesComponent />
        <Toast />
      </ThemeProvider>
    </Provider>
  )
}

export default App
