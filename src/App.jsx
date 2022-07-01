import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import Login from "./views/Login"

const App = () => {
  return (
    <>
      <GlobalSyles />

      <Page>
        <Login />
      </Page>
    </>
  )
}

export default App
