const ProgressBar = () => {
  return (
    <>
      <div className="PContainer">
        <div className="d-flex align-items-center mb-5" >
          <div className="me-3  stepCircle"></div>اطلاعات شخصی
        </div>
        <div className="d-flex align-items-center mb-5">
            <div className="beforeCircle">
            <div className="me-3  stepCircle"></div>سابقه کاری
            </div>
         
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle"></div>مدرک تحصیلی
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3 text-center   stepCircle">4</div>مهارت های زبان
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle">5</div>مهارت های نرم افزاری
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="me-3  stepCircle_1">6</div>نمونه کار
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
