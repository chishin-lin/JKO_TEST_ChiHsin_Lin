import React, { useState, useEffect } from "react";
import RaceTime from "./components/RaceTime";
import RaceSchedule from "./components/RaceSchedule";
import { getTimeList, getRaceDate } from "./api";
import "./main.scss";

function App() {
  const [dateList, setDateList] = useState([]);
  const [racesData, setRacesData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    (async () => {
      const _dateList = await getTimeList();
      setDateList(_dateList);
      setSelectedDate(_dateList[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedDate === "") return;
      const _racesData = await getRaceDate(selectedDate);
      setRacesData(_racesData);
    })();
  }, [selectedDate]);

  const handleChangeDate = (data) => {
    setSelectedDate(data);
  };

  return (
    <div className="main-box">
      <header className="main-box-header">
        <h2>賽程表</h2>
        <p>聯盟戰況</p>
      </header>
      <div className="race-container">
        {dateList.map((data, index) => (
          <RaceTime
            selectedDate={selectedDate}
            key={index}
            data={data}
            onChangeDate={() => handleChangeDate(data)}
          />
        ))}
      </div>
      <div className="race-container">
        {racesData.map((races) => (
          <RaceSchedule key={races.gameId} data={races} />
        ))}
      </div>
    </div>
  );
}

export default App;
