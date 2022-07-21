import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import style from "components/Ads/Sec3/FormStyles/form.module.css";

const RVerifyPersonal = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <SectionLayout>
        <SectionEditTitle title="شرایط شغلی" step={2} />
        <div className="d-flex col-12 flex-wrap mt-5">
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className={`col-6 ${style.txt5}`}>عنوان:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.title}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className={`col-6 ${style.txt5}`}> همکاری به صورت:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.corporateType == 1
                ? "فقط حضوری"
                : resumeContext.data.corporateType == 2
                ? "فقط دورکاری"
                : "هردو"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>نوع همکاری:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.corporateTime.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>دسته بندی شغلی:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.jobCategory.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>تقاضای بیمه:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>استان:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.province.fa}
            </h6>
          </div>{" "}
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>شهر:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.city.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>حقوق درخواستی :</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {" "}
              از {resumeContext.data.salary.fa.from} تا{" "}
              {resumeContext.data.salary.fa.to}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>نحوه پرداخت حقوق:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.salaryType.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>ساعات کاری :</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {" "}
              از {resumeContext.data.workHour.fa.from} تا{" "}
              {resumeContext.data.workHour.fa.to}
            </h6>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default RVerifyPersonal;
