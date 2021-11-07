import Jko from "../assets/Icon/Jko.png";
import Braves from "../assets/Icon/Braves.png";
import Pilots from "../assets/Icon/Pilots.png";
import Taishin from "../assets/Icon/Taishin.png";
import { timeList } from "./time";
const [DATE202012, DATE202101, DATE202102, DATE202103] = timeList;

export const racesData = {
  [DATE202012]: [
    {
      gameId: 1,
      date: "12月13日(六)",
      time: "15:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "新竹街口攻城師", score: 112, icon: Jko },
      team2: { name: "台北富邦勇士", score: 105, icon: Braves },
    },
    {
      gameId: 2,
      date: "12月14日(日)",
      time: "17:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "桃園領航猿", score: 110, icon: Pilots },
      team2: { name: "福爾摩沙台新", score: 125, icon: Taishin },
    },
  ],
  [DATE202101]: [
    {
      gameId: 3,
      date: "01月13日(六)",
      time: "15:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "新竹街口攻城師", score: 120, icon: Jko },
      team2: { name: "桃園領航猿", score: 110, icon: Pilots },
    },
  ],
  [DATE202102]: [
    {
      gameId: 4,
      date: "02月14日(六)",
      time: "12:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "福爾摩沙台新", score: 112, icon: Taishin },
      team2: { name: "台北富邦勇士", score: 105, icon: Braves },
    },
    {
      gameId: 5,
      date: "02月15日(六)",
      time: "14:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "桃園領航猿", score: 110, icon: Pilots },
      team2: { name: "福爾摩沙台新", score: 105, icon: Taishin },
    },
    {
      gameId: 6,
      date: "02月20日(六)",
      time: "16:30",
      place: "桃園市立綜合體育館",
      raceState: "例行賽",
      team1: { name: "新竹街口攻城師", score: 112, icon: Jko },
      team2: { name: "福爾摩沙台新", score: 105, icon: Taishin },
    },
  ],
  [DATE202103]: [],
};
