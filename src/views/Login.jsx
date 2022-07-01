import { useState } from "react"
import styled from "@emotion/styled"
import TextField from "../components/TextField"
import PasswordField from "../components/PasswordField"
import Card from "../components/Card"
import Button from "../components/Button"
import afterbacksLogo from "../assets/icon-ab.png"
import sabadellLogo from "../assets/logo_sabadell.png"
import iconLockSrc from "../assets/icon-lock.svg"
import Features from "../components/Feautures"

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

const Relative = styled.div`
  position: relative;
`

const FeaturesCard = styled(Card)`
    @media (min-width: 1200px) {
        max-width: 310px;
        position: absolute;
        top: 0;
        left: calc(100% + 2rem);
    }
`


const Login = () => {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  return (
        <Relative>
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

          <FeaturesCard>
            <Features>
              <Features.Item image={iconLockSrc}>
                  Conexión via <a href="#" rel="noopener noreferrer" target="_blank">afterbanks</a>: API segura <strong>utilzado por ciento de miles de personas</strong> para aconectar con sus entidades financieras.
              </Features.Item>

              <Features.Item image={iconLockSrc}>
                <strong>Solo tenemos acceso a tus movimientos</strong>, con este acesso no se puede hacer transferencias ni modificar nada.
              </Features.Item>

              <Features.Item image={iconLockSrc}>
                 <strong>No guardamos tu contraseña.</strong> Solo se utiliza para crear la conexión.
              </Features.Item>
            </Features>
          </FeaturesCard>
        </Relative>
  )
}

export default Login
