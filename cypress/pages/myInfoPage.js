class MyInfoPage {

    selectorsList() {
        const selectors = {  
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            firstDropDown: ".oxd-select-dropdown > :nth-child(4)",
            secondDropDown: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            genericCombobox: "[tabindex='0']",
            genderField: ".oxd-radio-wrapper",
            submitButton: "[type='submit']" 
        }

        return selectors
    }
  
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }

    fillStatus(dateOfBirth) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().firstDropDown).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().secondDropDown).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderField).eq(1).click()
        
    }

}

export default MyInfoPage