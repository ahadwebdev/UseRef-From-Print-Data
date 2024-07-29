import React, { useRef } from "react";

const Data = ({ setValue1, setValue2, setValue3, setValue4 }) => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setValue1(inputRef1.current.value);
    setValue2(inputRef2.current.value);
    setValue3(inputRef3.current.value);
    setValue4(inputRef4.current.value);
  };

  return (
    <div className="form-outer">
      <div className="form-border">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="flex flex-col h-20" id="firstname">
              <label>First Name</label>
              <input
                type="text"
                ref={inputRef1}
                placeholder="Enter First name"
                className="placeholder-white font-light"
              />
            </div>
            <div className="flex flex-col h-20" id="lastname">
              <label>Last Name</label>
              <input
                type="text"
                ref={inputRef2}
                placeholder="Enter Last name"
                className="placeholder-white font-light"
              />
            </div>
            <div className="flex flex-col h-20" id="email">
              <label>Email</label>
              <input
                type="email"
                ref={inputRef3}
                placeholder="Enter email"
                className="placeholder-white font-light"
              />
            </div>
            <div className="flex flex-col h-20" id="password">
              <label>Password</label>
              <input
                placeholder="Enter password"
                ref={inputRef4}
                className="placeholder-white font-light"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Data;
