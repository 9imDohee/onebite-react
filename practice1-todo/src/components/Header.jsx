import { memo } from "react";
import "./Header.css";

const Header = () => {
  const today = new Date().toDateString();

  return (
    <div className="Header">
      <h3>Today is 📆 </h3>
      <h1>{today}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header);
export default memoizedHeader;
