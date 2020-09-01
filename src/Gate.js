import React from "react";

function Gate({ isOpen }) {
  return (
    <div>
      <i>Gate is {isOpen ? "OPEN" : "CLOSED"}</i>
    </div>
  );
}

export default Gate;
