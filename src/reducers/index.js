import {combineReducers} from 'redux'
import createStore from './createStore'
import shiftsReducer from './shiftsReducer'


const catapultReducer = combineReducers({
  shifts: shiftsReducer,
})

export default createStore(catapultReducer)
