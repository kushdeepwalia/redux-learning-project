import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { loading } = useSelector((state) => state)
  console.log("Header : ", loading)
  const style = loading ? {
    zIndex : 99,
    display : "none"
  } : null

  return (
    <div className="ui fixed menu" style={style}>
      <div className="ui container center">
        <h2>FakeShop</h2>
      </div>
    </div>
  );
};

export default Header;