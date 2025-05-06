import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
  
    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'Other Id', '123456', '1995-16-01')
    myInfoPage.fillStatus('1995-16-01')
    myInfoPage.saveForm()

  })
 
})