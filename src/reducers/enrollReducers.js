import { createReducer, commonCrudReducers } from '../store/helpers'
import { types } from '../actions'

const initialState = {
  records: [],
  error: {},
  loading: false
}

const reducerType = types.ENROLL

export default createReducer(initialState, {
  ...commonCrudReducers(reducerType)
})
