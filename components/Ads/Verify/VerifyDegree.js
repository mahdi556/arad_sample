import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "components/Ads/Tools/BreakLine";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
const VerifyDegree = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      {/* <BreakLine /> */}

      <SectionLayout marginTop={false} paddingTop={false}>
        <SectionEditTitle title="مدرک تحصیلی" step={4} />
        {resumeContext.data.degree.length == 0 ? (
          <div className="text-center mt-3">
            <h6 className="mb-4">مدرک تحصیلی ثبت نشده است</h6>
            <BreakLine />
          </div>
        ) : (
          resumeContext.data.degree.map((item, key) => (
            <>
              <div className="d-flex col-12 justify-content-start align-items-center my-4 ">
                <h5 className={`col-6 ${style.txt5}`}>آخرین مدرک تحصیلی:</h5>
                <h6 className={`col-6 ${style.txt6}`}>{item.title}</h6>
              </div>

              <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
                <h5 className={`col-6 ${style.txt5}`}>رشته تحصیلی:</h5>
                <h6 className={`col-6 ${style.txt6}`}>{item.degree}</h6>
              </div>

              <div className="d-flex col-6 justify-content-start align-items-center mb-4">
                <h5 className={`col-6 ${style.txt5}`}>سال فارغ التحصیلی:</h5>
                <h6 className={`col-6 ${style.txt6}`}>
                  {item.date.y}/{item.date.m}
                </h6>
              </div>
              <BreakLine />
            </>
          ))
        )}
      </SectionLayout>
    </>
  );
};

export default VerifyDegree;
