import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import Login from "./views/Login"
import Error from "./views/Error"

const App = () => {
  const handleGoBack = () => {}

  return (
    <>
      <GlobalSyles />

      <Page>
        <Error onGoBack={handleGoBack} />
      </Page>
    </>
  )
}

export default App
