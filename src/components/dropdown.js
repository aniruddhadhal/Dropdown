import React from "react";

const dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.items.map((item) => (
        <p key={props.items.indexOf(item)} onClick={() => props.handleOnClick(item)}>{item}</p>
      ))}
    </div>
  );
};

export default dropdown;
