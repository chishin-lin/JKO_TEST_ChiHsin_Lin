import { racesData, timeList } from "./mock";

export const getTimeList = async () => {
  const res = await Promise.resolve(timeList);
  return res;
};

export const getRaceDate = async (date) => {
  const mappingDate = racesData[date];
  const res = await Promise.resolve(mappingDate);
  return res;
};
