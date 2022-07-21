import { useContext } from "react";
 import { numberToWords } from "@persian-tools/persian-tools";
 import ResumeContext from "context/Ad/CreateResume/ResumeContext";

const VerifyPersonalData = ({ handleStep }) => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          className="col-12 "
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
              handleStep(2, "55%");
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
            <h5 className="col-6 fs-6 fw-light">عنوان:</h5>
            <h6 className="col-6 fs-6  ">{resumeContext.data.title}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fs-6 fw-light">همکاری به صورت:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.corporateType == 1
                ? "فقط حضوری"
                : resumeContext.data.corporateType == 2
                ? "فقط دورکاری"
                : "هردو"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">دسته بندی شغلی:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.jobCategory.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.sex == 1 ? "مرد" : "زن"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">وضعیت تاهل:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.married == 1 ? "مجرد" : "متاهل"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6  fs-6 fw-light">تقاضای بیمه:</h5>
            <h6 className="col-6 fs-6  ">
              {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">استان:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.province.fa}</h6>
        </div>{" "}
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">شهر:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.city.fa}</h6>
        </div>
          <div className="d-flex col-12 justify-content-start align-items-start mb-4">
            <h5 className="col-4 fs-6 fw-light ">حقوق درخواستی :</h5>
            <h6 className="col-8 fs-6  ">
              {resumeContext.data.salaryAgree ? (
                "توافقی"
              ) : (
                <>
                  <h6>
                    از {resumeContext.data.salary.fa.from} تومان تا{" "}
                    {resumeContext.data.salary.fa.to} تومان{" "}
                  </h6>
                  <h6
                    style={{
                      fontSize: 14,
                    }}
                  >
                    از {numberToWords(resumeContext.data.salary.fa.to)} تومان تا{" "}
                    {numberToWords(resumeContext.data.salary.fa.to)} تومان
                  </h6>
                </>
              )}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPersonalData;
