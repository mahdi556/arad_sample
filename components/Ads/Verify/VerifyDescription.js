import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import style from "components/Ads/Sec3/FormStyles/form.module.css";

const VerifyDescription = ({step}) => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <SectionLayout marginTop={false}  paddingTop={false}>
        <SectionEditTitle title="توضیحات کاری" step={step} />
        <div className="d-flex col-12 flex-wrap mt-4 ">
          <div className="d-flex flex-column col-12 justify-content-start align-items-start ">
             <h6 className={`col-12 ${style.txt6} mt-3`}>{resumeContext.data.description}</h6>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default VerifyDescription;
