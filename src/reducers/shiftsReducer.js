const InitialState = {
  shiftsList: [],
  fetchingShifts: false,
}

const shiftsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_SHIFTS_LIST_FULFILLED': {
      const {payload: {data}} = action
      return Object.assign({}, state, {fetchingShifts: false, shiftsList: data})
    }

    case 'FETCH_SHIFTS_LIST_PENDING': {
      return Object.assign({}, state, {fetchingShifts: true})
    }

    default:
      return state
  }
}

export default shiftsReducer
