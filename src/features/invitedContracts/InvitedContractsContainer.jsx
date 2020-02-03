import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import InvitedContractsList from "./InvitedContractsList";
import { fetchContracts } from "../../actions/invitedContractsActions";

class InvitedContractsContainer extends Component {
  handleContractsClick() {
    const { fetchInvitedContractsList } = this.props;
    fetchInvitedContractsList();
  }

  render() {
    return (
      <div>
        <InvitedContractsList
          contracts={this.props.invitedContractsList}
          roleId={this.props.roleId}
          handleContractsClick={this.handleContractsClick}
        />
      </div>
    );
  }
}

InvitedContractsContainer.propTypes = {
  roleId: PropTypes.number.isRequired,
  invitedContractsList: PropTypes.arrayOf(
    PropTypes.shape({
      candidateName: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  invitedContractsList: state.contracts.invitedContractsList
});

const mapDispatchToProps = dispatch => ({
  fetchInvitedContractsList: roleId => dispatch(fetchContracts(roleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitedContractsContainer);
