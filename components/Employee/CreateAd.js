import { useRouter } from "next/router";
import { useState } from "react";
import ContactForm from "./FormInputs/Contact";
import FirstForm from "./FormInputs/FirstForm";
import JobCondition from "./FormInputs/JobCondition";
import StepButton from "./FormInputs/StepButton";
import VerticalProgress from "./FormInputs/VerticalProgress";
 
 
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
            <div
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
                <FirstForm />

                {step < 2 && (
                  <StepButton handleStep={handleStep} step={2} ph={"60%"} />
                )}

                {step >= 2 && (
                  <JobCondition step={step} handleStep={handleStep} />
                )}

                {step == 3 && <ContactForm />}
              </div>
            </div>
          </div>
        </div>
       
       
    </>
  );
};

export default CreateEmployeeAd;
