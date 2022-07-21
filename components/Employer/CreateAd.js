import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import FirstForm from "./NormalAd/FirstForm";
import StepButton from "./NormalAd/StepButton";
import PersonalData from "./NormalAd/PersonalData";
import VerticalProgress from "./NormalAd/VerticalProgress";
import VerifyFirstForm from "./NormalAd/VerifyFirstForm";
import VerifyPersonalData from "./NormalAd/VerifyPersonalData";
import ContactForm from "./NormalAd/Contact";
import OurExpect from "./NormalAd/OurExpect";
import VerifyOurExpect from "./NormalAd/VerifyOurExpect";
import SubmitRn from "./NormalAd/SubmitRn";
import Description from "./NormalAd/Description";
import VerifyDescription from "./NormalAd/VerifyDescription";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
const CreateEmployerAd = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const resumeContext = useContext(ResumeContext);
  const [p_height, setP_height] = useState("10%");
  const [step2, setStep2] = useState(1);
  const [p_height2, setP_height2] = useState("10%");

  const handleStep = (sn, ph) => {
    resumeContext.dispatch({ type: "stepClick", payload: true });
    setStep2(sn);
    setP_height2(ph);
  };
  const handleStepEdit = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
  };

  useEffect(() => {
    if (resumeContext.data.fieldCheck) {
      resumeContext.dispatch({
        type: "fieldCheck",
        payload: false,
      });
      resumeContext.dispatch({
        type: "stepClick",
        payload: false,
      });
      setStep(step2);
      setP_height(p_height2);
    }
  }, [resumeContext.data.fieldCheck]);
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#E5E5E5",
          paddingTop: "9rem",
          paddingBottom: 400,
        }}
      >
        <div
          style={{
            width: "62%",
            marginRight: "13%",
            marginLeft: "25%",
          }}
        >
          <div className="d-flex justify-content-between  ">
            <div
              style={{
                width: "15%",
              }}
            >
              <VerticalProgress step={step} p_height={p_height} />
            </div>
            <div
              style={{
                width: "83%",
              }}
            >
              <div
                className="d-flex px-3 py-3  mb-5 align-items-center  "
                style={{ backgroundColor: "#fff", borderRadius: "0.7rem" }}
              >
                <h3
                  className=" mx-auto"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    lineHeight: "1.4rem",
                  }}
                >
                  آگهی معمولی (فارسی)
                </h3>
              </div>

              {step == 1 && <FirstForm />}

              {step < 2 && (
                <StepButton handleStep={handleStep} step={1} ph={"55%"} />
              )}

              {step > 1 && (
                <>
                  <VerifyFirstForm handleStep={handleStepEdit} />
                </>
              )}

              {step == 2 && (
                <>
                  <PersonalData />
                  <StepButton handleStep={handleStep} step={2} ph={"75%"} />
                </>
              )}

              {step > 2 && (
                <>
                  <VerifyPersonalData handleStep={handleStepEdit} />
                </>
              )}
              {step == 3 && (
                <>
                  <OurExpect />
                  <StepButton handleStep={handleStep} step={3} ph={"95%"} />
                </>
              )}
              {step > 3 && (
                <>
                  <VerifyOurExpect handleStep={handleStepEdit} />
                </>
              )}
              {step == 4 && (
                <>
                  <Description />
                  <StepButton handleStep={handleStep} step={4} ph={"95%"} />
                </>
              )}
              {step > 4 && (
                <>
                  <VerifyDescription handleStep={handleStepEdit} />
                  <ContactForm />
                  <SubmitRn />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmployerAd;
