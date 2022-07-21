  
import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import { Province } from "../../../StaticData/City";
import { Cities } from "../../../StaticData/City";
import { JobCats } from "../../../StaticData/JobCategory";

const VerifyData = ({ handleStep }) => {
  const resumeContext = useContext(ResumeContext);
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
        اطلاعات شخصی
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 2 });
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
      <div className="d-flex col-12 flex-wrap px-4">
        <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
          <h5 className="col-6 fs-6 fw-light">نام:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.name}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">name:</h5>
          <h6 className="col-6  fs-6  ">{resumeContext.data.Ename}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
          <h5 className="col-6 fs-6 fw-light">نام خانوادگی:</h5>
          <h6 className="col-6  fs-6  ">{resumeContext.data.lastname}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4 "
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">lastname:</h5>
          <h6 className="col-6  fs-6   ">{resumeContext.data.Elastname}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
          <h5 className="col-6 fs-6 fw-light">عنوان شغلی:</h5>
          <h6 className="col-6  fs-6  ">{resumeContext.data.title}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4 "
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">title:</h5>
          <h6 className="col-6  fs-6   ">{resumeContext.data.entitle}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">تاریخ تولد:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.birthday.year}/
            {resumeContext.data.birthday.month}/
            {resumeContext.data.birthday.day}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">birthday:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.Ebirthday.year}/
            {resumeContext.data.Ebirthday.month}/
            {resumeContext.data.Ebirthday.day}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.sex.id == 1 ? "مرد" : "زن"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">sex:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.sex.id == 1 ? "Male" : "Female"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">وضعیت تاهل:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.married.id == 1 ? "مجرد" : "متاهل"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">Married:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.married.id == 1 ? "Single" : "Married"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">دسته شغلی:</h5>
          <h6 className="col-6  fs-6  ">{resumeContext.data.jobCategory.fa}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">Job Category</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.jobCategory.id != ""
              ? JobCats[resumeContext.data.jobCategory.id - 1].en
              : ""}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6  fs-6 fw-light">تقاضای بیمه:</h5>
          <h6 className="col-6 fs-6  ">
            {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">Need Insurrance:</h5>
          <h6 className="col-6 fs-6  ">
            {resumeContext.data.insurrance == 1 ? "Yes" : "No"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">استان:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.province.name}</h6>
        </div>{" "}
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">state:</h5>
          <h6 className="col-6 fs-6  ">
            {resumeContext.data.province.id != ""
              ? Province[resumeContext.data.province.id - 1].en
              : ""}
          </h6>
        </div>{" "}
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">منطقه:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.city.name}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">city:</h5>
          <h6 className="col-6 fs-6  ">
            {resumeContext.data.city.id != ""
              ? Cities[resumeContext.data.city.id - 1].en
              : ""}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light ">حقوق درخواستی :</h5>
          <h6 className="col-6 fs-6  ">
            {" "}
            از {resumeContext.data.salary.fa.from} تا{" "}
            {resumeContext.data.salary.fa.to}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6 fw-light">Amount of salary requested :</h5>
          <h6 className="col-6 fs-6  ">
            {" "}
            from {resumeContext.data.salary.en.from} Tooman to{" "}
            {resumeContext.data.salary.en.to} Tooman
          </h6>
        </div>
      </div>
    </>
  );
};

export default VerifyData;
