import PropTypes from "prop-types";
import React, { useState } from "react";
import InvitedContractsContainer from "../invitedContracts/InvitedContractsContainer";
import QuickFilters from "./QuickFilters";

function ShiftsList({ list }) {
  const [filter, setFilter] = useState("");
  const [time, setTime] = useState("");

  const clearFilters = () => {
    setFilter("");
    setTime("");
  };

  list = list.filter(shift => {
    const type = determineAmOrPm(shift.startTime);
    if (shift.jobType.startsWith(filter) && (type == time || time === ""))
      return shift;
  });

  return (
    <div>
      <h1>Shifts List</h1>
      <h4>Quick Filters</h4>
      <div>
        <QuickFilters
          setFilter={setFilter}
          setTime={setTime}
          clearFilters={clearFilters}
        />
        <p>
          Filtering for {filter ? "job type: " + filter : null}{" "}
          {time ? "time: " + time : null}
        </p>
        <div>
          <label htmlFor="filter">Filter for:</label>
          <input
            name="filter"
            value={filter}
            onChange={setFilter}
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

const determineAmOrPm = timeString => {
  return timeString.split(":")[0] > 12 ? "PM" : "AM";
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
