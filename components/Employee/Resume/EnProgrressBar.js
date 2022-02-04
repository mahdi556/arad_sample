import { useEffect, useState } from "react";

const EnProgrressBar = () => {
  const [percent, setPercent] = useState(false);

  return (
    <>
      <div className="PContainer">
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h6 className="progressTitle">Introducing Me</h6>
          <div class="set-size charts-container ms-1">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
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
