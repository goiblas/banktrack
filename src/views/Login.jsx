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
import Title from "../components/Title"
import LockIcon from "../icons/Lock"
import { isValidUsername, isValidPassword } from "../utils/validations"

const Description = styled.p`
    font-weight: ${({theme}) => theme.typography.weight.medium};
    font-size: ${({theme}) => theme.typography.size.label};
    line-height: ${({theme}) => theme.typography.lineHeight.small};
    color: ${({theme}) => theme.colors.neutrals[700]};
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
    font-size: ${({theme}) => theme.typography.size.label};
    color: ${({theme}) => theme.colors.neutrals[700]};
    gap: .5rem;
    margin-bottom: .25rem;

    a {
      font-weight: ${({theme}) => theme.typography.weight.medium};
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

const Login = ({ onLogin, isLoading }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = ev => {
    ev.preventDefault()
    if(isValidUsername(username) && isValidPassword(password)) {
      onLogin({ username, password })
    }
  }

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

            <Form onSubmit={handleSubmit}>
              <TextField
                type="email"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                name="username"
                textHelp="Identificador que pones en el web o app de Banco Sabadell"
                label="Identificador" />

              <PasswordField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                textHelp="Contraseña que pones en el web o app de Banco Sabadell"
                label="Contraseña" />

              <Center>
                <Button type="submit" disabled={isLoading}>
                  <LockIcon color="currentColor" />
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
