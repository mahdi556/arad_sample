import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percent, setPercent] = useState(false);
  
  return (
    <>
      <div className="PContainer">
      <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-60">
              <span class="label">1</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-60">
              <span class="label">2</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-2">
            <div class="pie-wrapper    progress-80">
              <span class="label">3</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
          
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-2">
            <div class="pie-wrapper    progress-70">
              <span class="label">4</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-2">
            <div class="pie-wrapper    progress-60">
              <span class="label">5</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          <h6 className="progressTitle">
          سابقه کاری
          </h6>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-2">
            <div class="pie-wrapper    progress-40">
              <span class="label">5</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
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