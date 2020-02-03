const initialState = {
  invitedContractsList: []
};

const invitedContractsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVITED_CONTRACTS_LIST_FULFILLED":
      const {
        payload: { data }
      } = action;
      return Object.assign({}, state, {
        invitedContractsList: data
      });
    default:
      return state;
  }
};

export default invitedContractsReducer;
