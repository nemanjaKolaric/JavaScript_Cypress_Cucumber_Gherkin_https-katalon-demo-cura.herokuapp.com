class BasePage {
    get makeAppointment() {
        return cy.get('#btn-make-appointment')
    }

    get inputUsername() {
        return cy.get("#txt-username")
    }

    get inputPassword() {
        return cy.get("#txt-password")
    }

    get loginButton() {
        return cy.get("#btn-login")
    }

    get menuBar() {
        return cy.get('#menu-toggle')
    }

    get homeLink() {
        return cy.contains('Home')
    }

    get historyLink() {
        return cy.contains('History')
    }

    get profileLink() {
        return cy.contains('Profile')
    }

    get logoutLink() {
        return cy.contains('Logout')
    }

    get facilities() {
        return cy.get('#combo_facility')
    }

    get hospitalReadmission() {
        return cy.get('#chk_hospotal_readmission')
    }

    get medicaidRadioButton() {
        return cy.get('#radio_program_medicaid')
    }

    get noneRadioButton() {
        return cy.get('#radio_program_none')
    }

    get visitDate() {
        return cy.get('#txt_visit_date')
    }

    get comment() {
        return cy.get('#txt_comment')
    }

    get bookApppointmentButton() {
        return cy.get('#btn-book-appointment')
    }

    fillAppointmentForm(facility) {
        if (facility === "Tokyo CURA Healthcare Center") {
            this.facilities.select(facility)
            this.hospitalReadmission.check()
            this.visitDate.type('15/05/2023', { delay: 10 })
            this.bookApppointmentButton.click()
        } else if (facility === "Hongkong CURA Healthcare Center") {
            this.facilities.select(facility)
            this.medicaidRadioButton.check()
            this.comment.type("Just another one test case :-)")
            this.visitDate.type('01/01/2020', { delay: 10 })
            this.bookApppointmentButton.click()
        } else {
            this.facilities.select(facility)
            this.noneRadioButton.check()
            this.visitDate.type('25/08/2023', { delay: 10 })
            this.bookApppointmentButton.click()
        }
    }

}
export default new BasePage()