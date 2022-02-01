import { useState } from "react";
import ContactForm from "./FormInputs/Contact";
import FirstFormVip from "./FormInputs/FirstFormVip";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "./FormInputs/StepButton";
import VerticalProgress from "./FormInputs/VerticalProgress";
import VipProvider from "../../context/employeeContext/VipProvider";
const CreateEmployerAdVip = () => {
  const [step, setStep] = useState(1);
  const [p_height, setP_height] = useState("10%");
  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
  };
  return (
    <>
    <VipProvider>
    <div
        style={{
          width: "100%",
          backgroundColor: "#E5E5E5",
          // marginTop:'6rem',
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
          <div
            className="d-flex px-3 py-3  mb-5 align-items-center "
            style={{ backgroundColor: "#D8EFEF", borderRadius: "0.5rem" }}
          >
            <h3
              className="me-auto"
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                lineHeight: "1.4rem",
              }}
            >
              جهت استخدام به عنوان فرد متخصص در سمت های مدیریتی در شرکت های بزرگ
              و ارائه سطح زبان،آگهی به زبان انگلیسی درج کنید{" "}
            </h3>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#EC4B72",
                lineHeight: "0.9rem",
                cursor: "pointer",
              }}
            >
              ثبت آگهی انگلیسی
            </h3>
          </div>
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
              <FirstFormVip />
              {step < 2 && (
                <StepButton handleStep={handleStep} step={2} ph={"30%"} />
              )}

              {step >= 2 && (
                <JobConditionVip step={step} handleStep={handleStep} />
              )}
              {step == 4 && (
                <StepButton handleStep={handleStep} step={5} ph={"98%"} />
              )}

              {step > 4 && <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </VipProvider>
      
    </>
  );
};

export default CreateEmployerAdVip;
