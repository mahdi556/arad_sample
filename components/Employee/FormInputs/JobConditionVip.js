import { useState } from "react";
import StepButton from "./StepButton";
import SoftExpert from "./SoftExpert";
import JoBExperience from "./JobExperience";
import DegreeDoc from "./DegreeDoc";
import SampleEx from "./SampleEx";
import CharTest from "./CharTest";
import VerifyData from "./VerifyData";
import PersonalData from "./PersonalData";
const JobConditionVip = (props) => {
  const [p_height, setP_height] = useState("10%");

  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
    handleStep2(sn, ph);
  };
  const [data, setData] = useState({
    title: "",
    name: "",
    lastname: "",
    birthday: {
      day: "",
      month: "",
      year: "",
    },
    sex: 1,
    married: 0,
    insurrance: 1,
    province: "",
    city: "",
  });

  const handleStep2 = props.handleStep;

  const [step, setStep] = useState(props.step);

  const [cat, setCat] = useState({ id: null, name: null });
  const personalHandler = (informs) => {
    setData({
      title: informs.title,
      name: informs.name,
      lastname: informs.lastname,
      birthday: {
        day: informs.birthday.day,
        month: informs.birthday.month,
        year: informs.birthday.year,
      },
      sex: informs.sex,
      married: informs.married,
      insurrance: informs.insurrance,
      province: informs.province,
      city: informs.city,
    });
  };

  return (
    <div className="row pt-4 pb-4 mt-4 sec2 ">
      {step < 3 && <PersonalData personalHandler={personalHandler} predata={data} />}

      {step < 3 && <StepButton handleStep={handleStep} step={3} ph={"53%"} />}

      {step >= 3 && (
        <>
          <VerifyData personalData={data} handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <JoBExperience />
        </>
      )}

      {step == 3 && <StepButton handleStep={handleStep} step={4} ph={"75%"} />}
      {step >= 4 && (
        <>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <DegreeDoc />
          <div className="mt-5">
            <SoftExpert name={"مهارت نرم افزاری"} />
          </div>
          <div className="mt-5">
            <SoftExpert name={"زبان"} />
          </div>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <SampleEx />
          <CharTest />
          <div className="d-flex  justify-content-between">
            <div className="col-12">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                توضیحات آگهی
              </label>
              <textarea
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                  height: "10rem",
                }}
                type="text"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobConditionVip;
