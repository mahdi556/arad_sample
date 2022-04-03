import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
 import { sex } from "../../StaticData/SalaryType";
  import AgeRange from "./AgeRange";

const OurExpect = () => {
  const normalAdContext = useContext(NormalAdContext);

   
  const sexHandler = (id, fa) => {
    normalAdContext.dispatch({ type: "sex", payload: { id: id, fa: fa } });
  };

 
  useEffect(() => {}, []);

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
            </div>
            <div className="col-12" >
            
            <AgeRange />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpect;
