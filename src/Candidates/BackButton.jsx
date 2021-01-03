import React from "react";

const BackButton = (props) => {
  const { onBackClick } = props;
  return (
    <div>
      <button type="button" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};

export default BackButton;
