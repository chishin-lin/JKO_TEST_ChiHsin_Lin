import React from "react";
import "./index.scss";

const RaceSchedule = ({
  data: { gameId, date, time, place, raceState, team1, team2 },
}) => {
  const handleBook = () => {
    console.log({ gameId, date, time });
  };
  const TeamInfo = ({ team }) => (
    <div className="race-team">
      <div className="flex">
        <img src={team.icon} alt="team-Icon" />
        <h4>{team.name}</h4>
      </div>
      <h3>
        <i>{team.score}</i>
      </h3>
    </div>
  );
  return (
    <div className="race-schedule-card">
      <div className="race-info">
        <div>
          <p>{`${date} ${time}`}</p>
          <p className="gray-bold">{place}</p>
        </div>
        <p className="gray-bold">{raceState}</p>
      </div>
      <div className="race-team-container">
        <TeamInfo team={team1} />
        <TeamInfo team={team2} />
      </div>
      <div className="flex">
        <button className="btn">查看詳情</button>
        <button className="btn red" onClick={handleBook}>
          購票
        </button>
      </div>
    </div>
  );
};

export default RaceSchedule;
