import { describe, it, expect } from 'vitest'
import { isValidPassword, isValidUsername } from "./validations"

describe('isValidPassword', () => {
    it('should contain at least one char and one number', () => {
        const invalidPassword = '12345'
        expect(isValidPassword(invalidPassword)).toBe(false)

        const validPassword = '123_A'
        expect(isValidPassword(validPassword)).toBe(true)
    })
})

describe('isValidUsername', () => {
    it('should be a valid email', () => {
        const invalidUsername = 'jesus'
        expect(isValidUsername(invalidUsername)).toBe(false)

        const validUsername = 'jesus@olazagoitia.com'
        expect(isValidUsername(validUsername)).toBe(true)
    })
})