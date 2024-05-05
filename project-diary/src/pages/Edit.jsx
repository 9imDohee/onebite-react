import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  // 전체 일기 데이터
  const data = useContext(DiaryStateContext);

  // 현재 일기 아이템
  const [curDiaryItem, setCurDiaryItem] = useState();
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    // 확인: true, 취소: false
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  // 수정 버튼
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
