import { useEffect, useState } from "react";

const EnProgrressBar = () => {
  const [percent, setPercent] = useState(false);

  return (
    <>
      <div className="PContainer">
      <div className=" progressDownButton px-3 py-2" >
          دانلود رزومه انگلیسی
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div className="set-size charts-container ms-1">
            <div className="pie-wrapper    progress-60">
              <span className="label">1</span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div>
      </div>
    </>
  );
};

export default EnProgrressBar;
