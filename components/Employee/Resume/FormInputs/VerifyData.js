import Image from "next/image";
import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
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
          <Image
            src="/assets/images/editForm.png"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      <div className="d-flex col-12 flex-wrap px-4">
        <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
          <h5 className="col-6 fs-6">نام:</h5>
          <h6 className="col-6 fs-6 fw-bold">{resumeContext.data.name}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">name:</h5>
          <h6 className="col-6  fs-6 fw-bold">{resumeContext.data.Ename}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
          <h5 className="col-6 fs-6">نام خانوادگی:</h5>
          <h6 className="col-6  fs-6 fw-bold">{resumeContext.data.lastname}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4 "
          dir="ltr"
        >
          <h5 className="col-6 fs-6">lastname:</h5>
          <h6 className="col-6  fs-6 fw-bold ">
            {resumeContext.data.Elastname}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6">تاریخ تولد:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.birthday.year}/
            {resumeContext.data.birthday.month}/
            {resumeContext.data.birthday.day}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">birthday:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.Ebirthday.year}/
            {resumeContext.data.Ebirthday.month}/
            {resumeContext.data.Ebirthday.day}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6">جنسیت:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.sex == 1 ? "مرد" : "زن"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">sex:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.sex == 1 ? "Male" : "Female"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6">وضعیت تاهل:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.married == 1 ? "مجرد" : "متاهل"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">Married:</h5>
          <h6 className="col-6  fs-6 fw-bold">
            {resumeContext.data.married == 1 ? "Single" : "Married"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6  fs-6 ">تقاضای بیمه:</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">Need Insurrance:</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {resumeContext.data.insurrance == 1 ? "Yes" : "No"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6">استان:</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {resumeContext.data.province.name}
          </h6>
        </div>{" "}
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">state:</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {resumeContext.data.province.Ename}
          </h6>
        </div>{" "}
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6">منطقه:</h5>
          <h6 className="col-6 fs-6 fw-bold">{resumeContext.data.city.name}</h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">city:</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {resumeContext.data.city.Ename}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 ">حقوق درخواستی :</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {" "}
            از {resumeContext.data.salary.fa.from} تا{" "}
            {resumeContext.data.salary.fa.to}
          </h6>
        </div>
        <div
          className="d-flex col-6 justify-content-start align-items-center mb-4"
          dir="ltr"
        >
          <h5 className="col-6 fs-6">Amount of salary requested :</h5>
          <h6 className="col-6 fs-6 fw-bold">
            {" "}
            from {resumeContext.data.salary.en.from} to{" "}
            {resumeContext.data.salary.en.to}
          </h6>
        </div>
      </div>
    </>
  );
};

export default VerifyData;
