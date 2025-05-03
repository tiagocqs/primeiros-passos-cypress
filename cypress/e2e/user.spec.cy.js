import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
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

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
  
  
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    // cy.get(selectorsList.middleNameField).clear().type('middleNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('employee')
    // cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('drive'rsLicenseTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericCombobox).eq(0).click()
    // cy.get(selectorsList.firstDropDown).click()
    // cy.get(selectorsList.genericCombobox).eq(1).click()
    // cy.get(selectorsList.secondDropDown).click()
    // cy.get(selectorsList.genericField).eq(7).clear().type('1995-01-16')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genderField).eq(1).click()
    // cy.get(selectorsList.submitButton).eq(0).click({force: true})
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})