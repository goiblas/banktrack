import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import * as auth from "./services/auth"
import App from './App'

const username = 'user@mail.com'
const password = "pass_1"
const Login = vi.spyOn(auth, "login")

describe('App', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it("should show invalid login message", async () => {
        Login.mockImplementationOnce(async () => ({ error: "invalid_login" }))

        render(<App />)
        const inputUsername = screen.getByLabelText("Identificador")
        userEvent.type(inputUsername, username)

        const inputPass = screen.getByLabelText("Contraseña")
        userEvent.type(inputPass, password)

        const submit = screen.getByText("Conectar")
        userEvent.click(submit)

        expect(Login).toHaveBeenCalledTimes(1)
        expect(Login).toHaveBeenCalledWith({ username, password })

        const errorMessage = await screen.findByText("Usuario o contraseña incorrectos")
        expect(errorMessage).toBeDefined()
    })

    it("should show bank down message", async () => {
        Login.mockImplementationOnce(async () => ({ error: "bank_down" }))

        render(<App />)
        const inputUsername = screen.getByLabelText("Identificador")
        userEvent.type(inputUsername, username)

        const inputPass = screen.getByLabelText("Contraseña")
        userEvent.type(inputPass, password)

        const submit = screen.getByText("Conectar")
        userEvent.click(submit)

        const errorMessage = await screen.findByText("No hemos podido conectar con el banco. Por favor, inténtelo de nuevo más tarde.")
        expect(errorMessage).toBeDefined()
    })

    it("should show unknown error message", async () => {
        Login.mockImplementationOnce(async () => ({ error: "unknown_error" }))
        
        render(<App />)
        const inputUsername = screen.getByLabelText("Identificador")
        userEvent.type(inputUsername, username)

        const inputPass = screen.getByLabelText("Contraseña")
        userEvent.type(inputPass, password)

        const submit = screen.getByText("Conectar")
        userEvent.click(submit)

        const errorMessage = await screen.findByText("Se ha enviado un aviso a nuestro equipo técnico. Resolveremos el problema lo antes posible.")
        expect(errorMessage).toBeDefined()
    })
    
    it("should not call to auth service with invalid username", async () => {
        const invalidUsername = "invalid_username"

        render(<App />)
        const inputUsername = screen.getByLabelText("Identificador")
        userEvent.type(inputUsername, invalidUsername)

        const inputPass = screen.getByLabelText("Contraseña")
        userEvent.type(inputPass, password)

        const submit = screen.getByText("Conectar")
        userEvent.click(submit)

        expect(Login).toHaveBeenCalledTimes(0)
    })
    
    it("should not call to auth service with invalid password", async () => {
        const invalidPassword = "invalid_password"

        render(<App />)
        const inputUsername = screen.getByLabelText("Identificador")
        userEvent.type(inputUsername, username)

        const inputPass = screen.getByLabelText("Contraseña")
        userEvent.type(inputPass, invalidPassword)

        const submit = screen.getByText("Conectar")
        userEvent.click(submit)

        expect(Login).toHaveBeenCalledTimes(0)
    })
})
