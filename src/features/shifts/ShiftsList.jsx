import PropTypes from "prop-types";
import React, { useState } from "react";
import InvitedContractsContainer from "../invitedContracts/invitedContractsContainer";

function ShiftsList({ list }) {
  const [filter, setFilter, handleChange] = useFilter();
  const quickFilters = ["Waiting", "Retail", "Barista", "Security"];

  list = list.filter(shift => {
    if (shift.jobType.startsWith(filter)) return shift;
  });

  return (
    <div>
      <h1>Shifts List</h1>
      <h4>Quick Filters</h4>
      <div>
        {quickFilters.map(filter => {
          return (
            <button type="button" onClick={e => setFilter(filter)}>
              {filter}
            </button>
          );
        })}

        <button type="button" name="clear" onClick={e => setFilter("")}>
          Clear Filters
        </button>
        <div>
          <label htmlFor="filter">Filter for:</label>
          <input
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder="Start filtering"
          />
        </div>
      </div>
      {list.map(shift => {
        return (
          <div key={shift.roleId}>
            Job type: {shift.jobType} <br />
            Start date: {shift.shiftDate} <br />
            Start time: {shift.startTime} <br />
            End time: {shift.endTime} <br />
            <InvitedContractsContainer roleId={shift.roleId} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

const useFilter = () => {
  const [filter, setFilter] = useState("");
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return [filter, setFilter, handleChange];
};

ShiftsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      roleId: PropTypes.number.isRequired,
      shiftDate: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      staff_required: PropTypes.number.isRequired,
      number_of_invited_staff: PropTypes.number.isRequired,
      jobType: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ShiftsList;
