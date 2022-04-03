import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import FieldError from "../../Common/FieldError";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
import { sex } from "../../StaticData/SalaryType";
import AgeRange from "./AgeRange";
import LangExpert from './LangExpert'
import SoftExpert from "./SoftExpert";

const OurExpect = () => {
  const normalAdContext = useContext(NormalAdContext);

  const [display, setDisplay] = useState("none");

  const sexHandler = (id, fa) => {
    normalAdContext.dispatch({ type: "sex", payload: { id: id, fa: fa } });
  };

  useEffect(() => {
    if (normalAdContext.data.stepClick) {
      if (
        normalAdContext.data.sex.fa !== "" &&
        normalAdContext.data.ageRange.fa.to !== ""
      ) {
        normalAdContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        normalAdContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [normalAdContext.data.stepClick]);
  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          انتظار ما از شما
        </div>
        <div className="d-flex justify-content-between col-12 px-5  ">
          <div className=" d-flex flex-wrap pe-4 col-12 ">
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 7,
              }}
            >
              <SelectOption
                data={sex}
                name="جنسیت"
                valueHandler={sexHandler}
                predata={normalAdContext.data.sex.fa}
              />
                <FieldError
              data={normalAdContext.data.sex.fa}
              display={display}
            />
            </div>
            <div className="col-12">
              <AgeRange />
              <FieldError
              data={normalAdContext.data.ageRange.fa.to}
              display={display}
            />
              <SoftExpert />
              <LangExpert />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpect;
