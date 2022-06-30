import { useState } from "react"
import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import TextField from "./components/TextField"
import PasswordField from "./components/PasswordField"
import Card from "./components/Card"
import Button from "./components/Button"
import styled from "@emotion/styled"
import afterbacksLogo from "./assets/icon-ab.png";
import sabadellLogo from "./assets/logo_sabadell.png";

const Description = styled.p`
    font-size: 0.875rem;
    line-height: 1.2;
    font-weight: 500;
    color: #646464;
`

const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.2;
    font-weight: bold;
    color: #222222;
    margin-bottom: .5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Header = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 2.5rem;
`

const Form = styled.form`
    display: grid;
    gap: 2rem;
`

const Center = styled.div`
    text-align: center;
`

const SecureText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: #646464;
    gap: .5rem;
    margin-bottom: .25rem;

    a {
        font-weight: 500;
    }
`

const App = () => {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <GlobalSyles />

      <Page>
        <Card>
          <Header>
            <Title>
              <img src={sabadellLogo} width="50" height="50" alt="" />
              Banco Sabadell
              </Title>
            <Description>Escribe tu identificador y contraseña de Banco Sabadell para conectar con el banco</Description>
          </Header>
          <Form>
            <TextField
              value={identifier}
              onChange={(ev) => setIdentifier(ev.target.value)}
              name="identifier"
              textHelp="Identificador que pones en el web o app de Banco Sabadell"
              label="Identificador" />

            <PasswordField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              textHelp="Contraseña que pones en el web o app de Banco Sabadell"
              label="Contraseña" />

            <Center>
              <Button type="submit">
                Conectar
              </Button>
            </Center>

            <SecureText>
              <img src={afterbacksLogo} alt="Afterbacks" width="25" height="18" />
              <span>Conexión segura via <a href="#" rel="noopener noreferrer" target="_blank">afterbacks</a></span>
            </SecureText>
          </Form>
        </Card>
      </Page>
    </>
  )
}

export default App
