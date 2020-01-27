/* eslint-disable no-unused-vars */
import {getJSON, postJSON, putJSON} from './request.js'

export function fetchShiftsList() {
  return getJSON('http://localhost:8080/api/shifts_list')
}

export function fetchInvitedContractsList(roleId) {
  return getJSON('http://localhost:8080/api/invited_contracts_list', {roleId})
}
