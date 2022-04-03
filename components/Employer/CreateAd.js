import { useRouter } from "next/router";
import { useState } from "react";
import NormalAdProvider from "../../context/employerContext/CreateAd/NormalAd/NormalAdProvider";
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

const CreateEmployerAd = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [p_height, setP_height] = useState("10%");
  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
  };

  return (
    <>
      <NormalAdProvider>
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
                    <VerifyFirstForm handleStep={handleStep} />
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
                    <VerifyPersonalData handleStep={handleStep} />
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
                    <VerifyOurExpect handleStep={handleStep} />
                    <ContactForm />
                    <SubmitRn />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </NormalAdProvider>
    </>
  );
};

export default CreateEmployerAd;
