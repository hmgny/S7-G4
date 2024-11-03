import { errorMessage } from "../../src/components/Login"

describe('Login Page', () => {
  describe('Error Messages', () => {
    it('ad 2 karakterse error mesajı yazsın', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="ad-input"]').type("me")
      cy.contains(errorMessage.ad)
    })

    it('soyad 2 karakterse error mesajı yazsın', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="soyad-input"]').type("gü")
      cy.contains(errorMessage.soyad)
    })

    it('geçerli bir mail adresi değilse error mesajı yazsın', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="email-input"]').type("merve@wit.")
      cy.contains(errorMessage.email)
    })

    it('zayıf bir parolaysa error mesajı yazsın', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="password-input"]').type("1234")
      cy.contains(errorMessage.password)
    })

    it('buton disabled değilse hata versin', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    })
  })
})
describe('Success Login', () => {
  it('buton enabled ise login başarılı olsun', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="ad-input"]').type("merve")
    cy.get('[data-cy="soyad-input"]').type("güney")
    cy.get('[data-cy="email-input"]').type("hmerveguney@gmail.com")
    cy.get('[data-cy="password-input"]').type("12345Aa*")
    cy.get('[data-cy="submit-button"]').should("not.be.disabled")
  }) 
})

