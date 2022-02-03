 const ProgressBar = () => {
  return (
    <>
      <div className="PContainer">
        <div className="d-flex align-items-center mb-5">
          <div className="beforeCircle me-3">
            <div className="  stepCircle"></div>
          </div>
          اطلاعات شخصی
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="beforeCircle me-3">
            <div className="  stepCircle"></div>
          </div>
          سابقه کاری
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="beforeCircle me-3  ">
            <div className="  stepCircle"></div>
          </div>
          مدرک تحصیلی
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="beforeCircle me-3">
            <div className=" text-center   stepCircle">4</div>
          </div>
          مهارت های زبان
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="beforeCircle me-3">
            <div className="  stepCircle">5</div>
          </div>
          مهارت های نرم افزاری
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div>
        <div class="set-size charts-container">
          <div class="pie-wrapper progress-30">
            <span class="label">
              60<span class="smaller">%</span>
            </span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
