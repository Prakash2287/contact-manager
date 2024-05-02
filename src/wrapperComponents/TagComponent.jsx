import React from "react";

const Tag = ({ children }) => {
  const style = {
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "20px",
    backgroundColor: "#f2bc0a" /* Pale yellow */,
    color: "#000000" /* Black text */,
  };
  return (
    <div className="tag" style={style}>
      {children}
    </div>
  );
};

export default Tag;
