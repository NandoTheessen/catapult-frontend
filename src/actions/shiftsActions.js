import {
  FETCH_SHIFTS_LIST,
} from './constants.js'
import {
  fetchShiftsList,
} from '../lib/requests/webapi.js'

export function fetchShifts() {
  return {
    type: FETCH_SHIFTS_LIST,
    payload: fetchShiftsList(),
  }
}
