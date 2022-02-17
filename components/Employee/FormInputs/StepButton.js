import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";

const StepButton = ({ handleStep, step }) => {
  const resumeContext = useContext(ResumeContext);
   const handleProgress = () => {
    resumeContext.dispatch({ type: "progressBar-reset" });
    resumeContext.data.name !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
    resumeContext.data.lastname !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
      resumeContext.data.birthday.day !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
      resumeContext.data.province.id !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
      resumeContext.data.city.id !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
      resumeContext.data.salary.fa !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
      resumeContext.data.jobCategory.id !== "" &&
      resumeContext.dispatch({ type: "progressBar-c" });
  };
  return (
    <div
      className="d-flex mt-5 justify-content-center"
      onClick={() => {
        handleStep(step + 1);
        handleProgress()
      }}
    >
      <div
        className="py-2 text-white"
        style={{
          width: "35%",
          fontSize: "1.5rem",
          backgroundColor: "#E92B59",
          textAlign: "center",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        بعدی
      </div>
    </div>
  );
};

export default StepButton;
