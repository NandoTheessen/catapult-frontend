import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class InvitedContractsContainer extends Component {
  handleContractsClick(roleId) {
    console.log(roleId)
  }

  render() {
    const {roleId} = this.props

    return (
      <button onClick={() => this.handleContractsClick(roleId)}>Invited Candidates</button>
    )
  }
}

InvitedContractsContainer.propTypes = {
  roleId: PropTypes.number.isRequired,
  invitedContractsList: PropTypes.arrayOf(PropTypes.shape({
    candidateName: PropTypes.string.isRequired,
  })),
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitedContractsContainer)
