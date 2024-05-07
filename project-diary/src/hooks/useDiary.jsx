// custom Hook
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const nav = useNavigate();

  // 전체 일기 데이터
  const data = useContext(DiaryStateContext);

  // 현재 일기 아이템
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
