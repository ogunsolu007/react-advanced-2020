import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    setTitle("Hello People");
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
