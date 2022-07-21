import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "components/Ads/Tools/BreakLine";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import style from "components/Ads/Sec3/FormStyles/form.module.css";

const VerifySampleEx = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <SectionLayout marginTop={false} paddingTop={false}>
        <SectionEditTitle title="نمونه کار" step={6} />
        {resumeContext.data.sampleEx.length == 0 ? (
          <div className="text-center">
            نمونه کار ثبت نشده است
            <BreakLine />
          </div>
        ) : (
          resumeContext.data.sampleEx.map((item, key) => (
            <>
              <div className="d-flex col-12 mt-4">
                <div className="col-6 mb-3">
                  <div className="">
                    <div className="d-flex   justify-content-start align-items-center me-5 ">
                      <h5 className={`col-6 ${style.txt5}`}>عنوان :</h5>
                      <h6 className={`col-6 ${style.txt6}`}>{item.title}</h6>
                    </div>
                    <div className="d-flex  justify-content-start align-items-center mb-3  ">
                      <h5 className={`col-6 ${style.txt5}`}>توضیحات:</h5>
                      <h6 className={`col-6 ${style.txt6}`}>
                        {item.faDiscription}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 " dir="ltr">
                  <div className="  px-4">
                    <div className="d-flex   justify-content-start align-items-center    ">
                      <h5 className=" ms-2 fs-6 fw-light">Link :</h5>
                      <h6 className={`col-6 ${style.txt6}`}>{item.link}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <BreakLine />
            </>
          ))
        )}
      </SectionLayout>
    </>
  );
};

export default VerifySampleEx;
