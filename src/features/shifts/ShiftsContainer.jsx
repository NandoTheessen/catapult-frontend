import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {fetchShifts} from '../../actions/shiftsActions'
import ShiftsList from './ShiftsList'

class ShiftsContainer extends Component {
  componentDidMount() {
    const {fetchShiftsList} = this.props
    fetchShiftsList()
  }

  render() {
    const {shiftsList, fetchingShifts} = this.props

    if (fetchingShifts) { return <h2>Loading</h2> }


    return (
      <ShiftsList list={shiftsList} />
    )
  }
}

ShiftsContainer.propTypes = {
  shiftsList: PropTypes.arrayOf(PropTypes.shape({
    roleId: PropTypes.number.isRequired,
    shiftDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    staff_required: PropTypes.number.isRequired,
    number_of_invited_staff: PropTypes.number.isRequired,
    jobType: PropTypes.string.isRequired,
  })).isRequired,
  fetchingShifts: PropTypes.bool.isRequired,
  fetchShiftsList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  shiftsList: state.shifts.shiftsList,
  fetchingShifts: state.shifts.fetchingShifts,
})

const mapDispatchToProps = (dispatch) => ({
  fetchShiftsList: () => dispatch(fetchShifts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShiftsContainer)
