import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // $ DOM 요소 변수
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
