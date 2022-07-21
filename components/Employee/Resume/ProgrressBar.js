import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
const ProgressBar = () => {
  const resumeContext = useContext(ResumeContext);

  useEffect(() => {
    // handlePersonalData();
  }, [resumeContext.data.progressBar]);
 

  return (
    <>
      <div className="PContainer">
        <div className=" progressDownButton px-3 py-2">دانلود رزومه فارسی</div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-3">
            <div
              className={`pie-wrapper   progress-${resumeContext.data.progressBar.c}  `}
            >
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">معرفی من</h6>
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
          <h6 className="progressTitle">اطلاعات شخصی</h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="set-size charts-container me-3">
            <div className="pie-wrapper    progress-0">
              <span className="label">۲</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">سابقه کاری</h6>
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
          <h6 className="progressTitle">مدرک تحصیلی</h6>
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
          <h6 className="progressTitle">مهارت های زبان</h6>
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
          <h6 className="progressTitle">مهارت های نرم افزاری</h6>
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
          <h6 className="progressTitle">نمونه کار</h6>
        </div>
        {/* <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div> */}
        {/* <button className="btn btn-success me-2" onClick={()=>resumecontext.dispatch({type:'step',payload:step+1})} > + </button>
        <button className="btn btn-danger" onClick={()=>resumecontext.dispatch({type:'step',payload:step-1})}>  - </button> */}
      </div>
    </>
  );
};

export default ProgressBar;
