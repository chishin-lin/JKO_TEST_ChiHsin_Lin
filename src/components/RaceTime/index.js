import React from "react";
import "./index.scss";

const RaceTime = ({ data, onChangeDate, selectedDate }) => {
  const year = new Date(data).getFullYear();
  const month = new Date(data).getMonth() + 1;
  const date = `${year}年 ${month}月`;
  return (
    <button
      className={
        selectedDate === data ? "race-time-btn selector" : "race-time-btn"
      }
      onClick={() => onChangeDate()}
    >
      {date}
    </button>
  );
};

export default RaceTime;
