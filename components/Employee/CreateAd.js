import { useRouter } from "next/router";
import { useState } from "react";
import NormalAdProvider from "../../context/employeeContext/CreateAd/NormalAd/NormalAdProvider";
import FirstForm from "./FormInputs/FirstForm";
import StepButton from "./NormalAd/StepButton";
import PersonalData from "./NormalAd/PersonalData";
import VerticalProgress from "./NormalAd/VerticalProgress";
import VerifyFirstForm from "./NormalAd/VerifyFirstForm";
import VerifyPersonalData from "./NormalAd/VerifyPersonalData";
import ContactForm from "./NormalAd/Contact";
import SubmitEn from "./NormalAd/SubmitEn";

const CreateEmployeeAd = () => {
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
            {/* <div
              className="d-flex px-3 py-3  mb-5 align-items-center "
              style={{ backgroundColor: "#D8EFEF", borderRadius: "0.5rem" }}
            >
              <h3
                className="me-auto"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  lineHeight: "1.4rem",
                }}
              >
                درصورت استخدام به عنوان فرد متخصص و ارائه نمونه کار ، آگهی ویژه
                ثبت کنید.
              </h3>
              <h3
                onClick={() => {
                  router.push({
                    pathname: "/employee/createAdPage",
                    query: { type: "Vip" },
                  });
                }}
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#EC4B72",
                  lineHeight: "0.9rem",
                  cursor: "pointer",
                }}
              >
                ثبت آگهی ویژه
              </h3>
            </div> */}

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
                    <StepButton handleStep={handleStep} step={2} ph={"95%"} />
                  </>
                )}

                {step > 2 && (
                  <>
                    <VerifyPersonalData handleStep={handleStep} />
                    <ContactForm />
                    <SubmitEn />
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

export default CreateEmployeeAd;
