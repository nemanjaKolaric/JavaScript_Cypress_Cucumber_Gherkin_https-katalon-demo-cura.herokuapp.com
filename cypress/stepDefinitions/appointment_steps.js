import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import basePage from "../pages/basePage"

Given('user is in Make Appointment section', () => {
    cy.visit('/')
    basePage.makeAppointment.click()
    cy.loginForm(Cypress.env('username'), Cypress.env('password'))
})

When('user choose facility {string} and fill other fields', (facility) => {
    basePage.fillAppointmentForm(facility)
})

Then('user has booked appointment', () => {
    cy.contains('Please be informed that your appointment has been booked as following:')
        .should('be.visible')
})

When('user do not fill Visit Date field', () => {
    basePage.bookApppointmentButton.click()
})

Then('user has not booked appointment', () => {
    cy.contains('Please be informed that your appointment has been booked as following:')
        .should('not.exist')
})