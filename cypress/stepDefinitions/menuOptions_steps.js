import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import basePage from "../pages/basePage"

Given('user is on appointment page', () => {
    cy.visit('/')
    basePage.makeAppointment.click()
    cy.loginForm(Cypress.env('username'), Cypress.env('password'))
})

When('user click on Home link', () => {
    basePage.menuBar.click()
    basePage.homeLink.click()
})

Then('user is on home page', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
})

When('user click on History link', () => {
    basePage.menuBar.click()
    basePage.historyLink.click()
})

Then('user is on history page', () => {
    cy.url().should('eq', Cypress.config().baseUrl + "history.php#history")
})

When('user click on Profile link', () => {
    basePage.menuBar.click()
    basePage.profileLink.click()
})

Then('user is on profile page', () => {
    cy.url().should('eq', Cypress.config().baseUrl + "profile.php#profile")
})

When('user click on Logout link', () => {
    basePage.menuBar.click()
    basePage.logoutLink.click()
})

Then('user is logged out', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
})