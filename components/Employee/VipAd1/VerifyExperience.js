  
import { useContext } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import BreakLine from '../Resume/FormInputs/BreakLine'
 const VerifyExperience = () => {
  const normalAdContext = useContext(NormalAdContext);
  return (
    <>
      <div
        className="col-12"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        سابقه کاری
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            normalAdContext.dispatch({ type: "step", payload: 3 });
          }}
        >
          <img
            src="/assets/images/editForm.png"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      {normalAdContext.data.experiences.length == 0 ? (
        <div className="text-center">
                 سابقه کاری ثبت نشده است
                 <BreakLine />
        </div>
      ) : (
        normalAdContext.data.experiences.map((item, key) => (
        <>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fw-light fs-6">عنوان شغلی:</h5>
            <h6 className="col-6">{item.title}</h6>
          </div>
          <div
            className="d-flex col-6 justify-content-start align-items-center mb-4"
            dir="ltr"
          >
            <h5 className="col-6 fw-light fs-6">Job title:</h5>
            <h6 className="col-6">{item.Entitle}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fw-light fs-6">نام سازمان:</h5>
            <h6 className="col-6">{item.name}</h6>
          </div>
          <div
            className="d-flex col-6 justify-content-start align-items-center mb-4 "
            dir="ltr"
          >
            <h5 className="col-6 fw-light fs-6">name of org:</h5>
            <h6 className="col-6">{item.Entitle}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">دلیل ترک:</h5>
            <h6 className="col-6">{item.reason}</h6>
          </div>
          <div
            className="d-flex col-6 justify-content-start align-items-center mb-4"
            dir="ltr"
          >
            <h5 className="col-6 fw-light fs-6">Reason of leaving:</h5>
            <h6 className="col-6">{item.Enreason}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">تاریخ شروع همکاری:</h5>
            <h6 className="col-6">
              {item.start.y}/{item.start.m}
            </h6>
          </div>
          <div
            className="d-flex col-6 justify-content-start align-items-center mb-4"
            dir="ltr"
          >
            <h5 className="col-6 fw-light fs-6">Start date:</h5>
            <h6 className="col-6">
              {item.Enstart.y}/{item.Enstart.m}
            </h6>
          </div>
          <div className="d-flex col-6 flex-wrap justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">تاریخ پایان همکاری:</h5>
            <h6 className="col-6">
              {item.finish.y}/{item.finish.m}
            </h6>
            {item.active && <h6 className="mt-4">مشغول به کار هستم</h6>}
          </div>
          <div
            className="d-flex col-6 flex-wrap justify-content-start align-items-center mb-4"
            dir="ltr"
          >
            <h5 className="col-6 fw-light fs-6">Finish date:</h5>
            <h6 className="col-6">
              {item.Enfinish.y}/{item.Enfinish.m}
            </h6>
            {item.Enactive && <h6 className="mt-4   fs-6">I am working</h6>}
          </div>
          <BreakLine />
        </>
      ))
      )}
      
    </>
  );
};

export default VerifyExperience;
