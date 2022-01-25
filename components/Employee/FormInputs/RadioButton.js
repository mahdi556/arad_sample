import { useEffect, useState } from "react";

const RadioButton = ({ title, choices, valueHandler, predata }) => {
  console.log(predata);
  const [cubeSwitch, setCubeSwitch] = useState( predata == 1
    ? {
        yes: "cubeSwitchGreen",
        no: "cubeSwitch",
      }
    : {
        yes: "cubeSwitch",
        no: "cubeSwitchRed",
      });
  

  return (
    <>
      <label
        style={{
          marginBottom: "0.5rem",
          fontSize: "1rem",
        }}
      >
        {title}
      </label>
      <div className="d-flex">
        <div
          className={cubeSwitch["yes"]}
          onClick={() => {
            setCubeSwitch({
              yes: "cubeSwitchGreen",
              no: "cubeSwitch",
            });
            valueHandler(1);
          }}
        >
          {choices[1]}
        </div>
        <div
          className={cubeSwitch["no"]}
          onClick={() => {
            setCubeSwitch({
              yes: "cubeSwitch",
              no: "cubeSwitchRed",
            });
            valueHandler(0);
          }}
        >
          {choices[2]}
        </div>
      </div>
    </>
  );
};

export default RadioButton;
