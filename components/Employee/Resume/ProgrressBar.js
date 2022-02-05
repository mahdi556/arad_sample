import { useContext, useEffect, useState } from "react";
 import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
const ProgressBar = () => {
  const resumecontext = useContext(ResumeContext);
   
  const [step, setStep] = useState(1);
  useEffect(()=>{
 setStep(resumecontext.data.step)
  },[])
   
  return (
    <>
      <div className="PContainer">
        <div className=" progressDownButton px-3 py-2" >
          دانلود رزومه فارسی
        </div>
      <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-3">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-3">
            <div className="pie-wrapper    progress-60">
              <span className="label">2</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-2">
            <div className="pie-wrapper    progress-80">
              <span className="label">3</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
          
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-2">
            <div className="pie-wrapper    progress-70">
              <span className="label">4</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-2">
            <div className="pie-wrapper    progress-60">
              <span className="label">5</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-2">
            <div className="pie-wrapper    progress-40">
              <span className="label">5</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
