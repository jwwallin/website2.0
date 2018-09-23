
import ui from './uiReducer'
import login from './loginReducers'
import registration from './registrationReducers'
import siteNavigation from './siteNavigationReducers'
import pages from './pageContentReducers'
import sponsors from './sponsorReducers'
import userAccounts from './userAccountReducers'
import roles from './userRoleReducers'
import enroll from './enrollReducers'

const rootReducer =
  {
    ui,
    login,
    registration,
    siteNavigation,
    pages,
    sponsors,
    userAccounts,
    roles,
    enroll
  }

export default rootReducer
