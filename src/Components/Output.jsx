import React from "react";

const Output = ({ value1, value2, value3, value4 }) => {
  return (
    <div className="Output">
      <div>
        <h1>First name:</h1>
        <h2>{value1}</h2>
      </div>
      <div>
        <h1>Last name:</h1>
        <h2>{value2}</h2>
      </div>
      <div>
        <h1>Email:</h1>
        <h2>{value3}</h2>
      </div>
      <div>
        <h1>Password:</h1>
        <h2>{value4}</h2>
      </div>
    </div>
  );
};

export default Output;
