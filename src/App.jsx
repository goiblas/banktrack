import { useState } from "react"
import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import Login from "./views/Login"
import Error from "./views/Error"
import { login } from "./services/auth"

const ERROR_TYPES = {
  invalid_login: "Usuario o contraseña incorrectos",
  bank_down: "No hemos podido conectar con el banco. Por favor, inténtelo de nuevo más tarde.",
  unknown_error: "Se ha enviado un aviso a nuestro equipo técnico. Resolveremos el problema lo antes posible."
}

const App = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGoBack = () => setError(false)

  const handleLogin = async ({ username, password }) => {
    setIsLoading(true)
    setError(false)
    try {
      const response = await login({ username, password })
      if(response.error) {
        const errorMessage = ERROR_TYPES[response.error] || ERROR_TYPES.unknown_error
        setError(errorMessage)
      }
    } catch (err) {
      setError(ERROR_TYPES.unknown_error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <GlobalSyles />

      <Page>
        {error ? (
          <Error onGoBack={handleGoBack} errorMessage={error} />
        ): (
          <Login onLogin={handleLogin} isLoading={isLoading} />
        )}
      </Page>
    </>
  )
}

export default App
