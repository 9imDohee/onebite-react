import { useState, useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

/** (현재 날짜, 일기 data) => 해당 월별 일기 data */
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  usePageTitle("감정 일기장");
  const data = useContext(DiaryStateContext);

  // 월별 data
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};
export default Home;
