import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import basePage from "../pages/basePage"

Given('user is on login page', () => {
    cy.visit('/')
    basePage.makeAppointment.click()
})

When('user insert valid credentials', () => {
    cy.loginForm(Cypress.env('username'), Cypress.env('password'))
})

Then('user is logged in', () => {
    cy.url().should('eq', Cypress.config().baseUrl + "#appointment")
})

When('user insert invalid credentials, username: {string}, password: {string}', (username, password) => {
    cy.loginForm(username, password)
})

Then('user is not logged in', () => {
    cy.url().should('eq', Cypress.config().baseUrl + "profile.php#login")
})