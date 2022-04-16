import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import FirstForm from "./VipAd/FirstForm";
import StepButton from "./VipAd/StepButton";
import PersonalData from "./VipAd/PersonalData";
import VerticalProgress from "./VipAd/VerticalProgress";
import VerifyFirstForm from "./VipAd/VerifyFirstForm";
import VerifyPersonalData from "./VipAd/VerifyPersonalData";
import ContactForm from "./VipAd/Contact";
import OurExpect from "./VipAd/OurExpect";
import VerifyOurExpect from "./VipAd/VerifyOurExpect";
import SubmitRn from "./VipAd/SubmitRn";
import Description from "./VipAd/Description";
import VerifyDescription from "./VipAd/VerifyDescription";
import NormalAdContext from "../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
const CreateEmployerAdVip = () => {
  const normalAdContext = useContext(NormalAdContext);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [p_height, setP_height] = useState("10%");
  const [step2, setStep2] = useState(1);
  const [p_height2, setP_height2] = useState("10%");
  const handleStep = (sn, ph) => {
    normalAdContext.dispatch({
      type: "stepClick",
      payload: true,
    });
    setStep2(sn);
    setP_height2(p_height);
  };
  const handleStepEdit = (sn, ph) => {
    setStep(sn);
    setP_height(p_height);
  };
  useEffect(() => {
    if (normalAdContext.data.fieldCheck) {
      normalAdContext.dispatch({
        type: "fieldCheck",
        payload: false,
      });
      normalAdContext.dispatch({
        type: "stepClick",
        payload: false,
      });
      setStep(step2);
      setP_height(p_height2);
    }
  }, [normalAdContext.data.fieldCheck]);
  return (
    <>
      {/* <NormalAdProvider> */}
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
                  آگهی ویژه (فارسی)
                </h3>
              </div>
              {step == 1 && <FirstForm />}

              {step < 2 && (
                <StepButton handleStep={handleStep} step={1} ph={"25%"} />
              )}

              {step > 1 && (
                <>
                  <VerifyFirstForm handleStep={handleStepEdit} />
                </>
              )}

              {step == 2 && (
                <>
                  <PersonalData />
                  <StepButton handleStep={handleStep} step={2} ph={"45%"} />
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
                  <StepButton handleStep={handleStep} step={3} ph={"78%"} />
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
                  <StepButton handleStep={handleStep} step={4} ph={"98%"} />
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
      {/* </NormalAdProvider> */}
    </>
  );
};

export default CreateEmployerAdVip;