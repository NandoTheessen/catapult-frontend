import { FETCH_INVITED_CONTRACTS_LIST } from "./constants.js";
import { fetchInvitedContractsList } from "../lib/requests/webapi.js";

export function fetchContracts(roleId) {
  return {
    type: FETCH_INVITED_CONTRACTS_LIST,
    payload: fetchInvitedContractsList(roleId)
  };
}
