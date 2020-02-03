import React from "react";

const quickFilters = ["Waiting", "Retail", "Barista", "Security", "Reception"];

const timeFilters = ["AM", "PM"];

const QuickFilters = props => {
  const { setFilter, setTime, clearFilters } = props;
  return (
    <React.Fragment>
      {quickFilters.map(filter => {
        return (
          <button type="button" onClick={() => setFilter(filter)} key={filter}>
            {filter}
          </button>
        );
      })}
      {timeFilters.map(time => {
        return (
          <button
            type="button"
            key={time}
            name={time}
            onClick={e => setTime(time)}
          >
            {time}
          </button>
        );
      })}
      <button type="button" name="clear" onClick={clearFilters}>
        Clear Filters
      </button>
    </React.Fragment>
  );
};

export default QuickFilters;
