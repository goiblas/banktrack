import { useState } from "react"
import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import TextField from "./components/TextField"
import PasswordField from "./components/PasswordField"
import Card from "./components/Card"
import Button from "./components/Button"

const App = () => {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
    <GlobalSyles />

    <Page>
      <Card>
        <TextField 
          value={identifier}
          onChange={(ev) => setIdentifier(ev.target.value)}
          name="identifier" 
          label="Identificador"
          textHelp="Identificador que pones en el web o app de Banco Sabadell"
        />

        <PasswordField 
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          name="password"
          textHelp="Contraseña que pones en el web o app de Banco Sabadell"
          label="Contraseña"
        />
        
        <Button>Volver</Button>
      </Card>
    </Page>
    </>
  )
}

export default App
