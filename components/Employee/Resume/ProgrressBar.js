import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percent, setPercent] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--percent", percent && 100);
  }, []);
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
          اطلاعات شخصی
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-80">
              <span class="label">2</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          سابقه کاری
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-70">
              <span class="label">3</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          مدرک تحصیلی
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-60">
              <span class="label">4</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          مهارت های زبان
        </div>
        <div className="d-flex align-items-center mb-3">
          <div class="set-size charts-container me-3">
            <div class="pie-wrapper    progress-40">
              <span class="label">5</span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
            </div>
          </div>
          مهارت های نرم افزاری
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
