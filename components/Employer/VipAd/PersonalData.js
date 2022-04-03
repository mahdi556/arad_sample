import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import RadioButton from "../../Employee/FormInputs/RadioButton";
import SalaryNeeded from "./SalaryNeeded";
import { JobCats } from "../../StaticData/JobCategory";
import { Province } from "../../StaticData/City";
import { Cities } from "../../StaticData/City";
import { SalaryType } from "../../StaticData/SalaryType";
import { corporateTime } from "../../StaticData/SalaryType";
import WorkHours from "./WorkHours";
import Options from "./Options";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
import FieldError from "../../Common/FieldError";

const PersonalData = () => {
  const normalAdContext = useContext(NormalAdContext);
  const [display, setDisplay] = useState("none");

  let proId = normalAdContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const catHandler = (id, fa) => {
    normalAdContext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };
  useEffect(() => {
    if (normalAdContext.data.stepClick) {
      if (
        normalAdContext.data.title !== "" &&
        normalAdContext.data.corporateTime.fa !== "" &&
        normalAdContext.data.province.fa !== "" &&
        normalAdContext.data.corporateTime.fa !== "" &&
        normalAdContext.data.jobCategory.fa !== "" &&
        normalAdContext.data.province.fa !== "" &&
        normalAdContext.data.city.fa !== "" &&
        normalAdContext.data.salaryType.fa !== ""
      ) {
        normalAdContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        normalAdContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [normalAdContext.data.stepClick]);
  const [buttonClass, setButtonClass] = useState({
    1: "Ebutton_clicked",
    2: "Ebutton",
    3: "Ebutton",
  });
  const handlePersonalProgress = (sec, item) => {
    sec !== "" && resumecontext.data.progressBar.c.push(item);
    normalAdContext.dispatch({ type: "progressBar-c" });
  };
  const SetButtClass = (i) => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({ ...buttonClass, [i]: "Ebutton_clicked " });
  };
  const insuranceHandler = (ins) => {
    normalAdContext.dispatch({ type: "insurrance", payload: ins });
  };

  const provinceHandler = (id, fa) => {
    normalAdContext.dispatch({
      type: "province",
      payload: { id: id, fa: fa },
    });
  };

  const cityHandler = (id, fa) => {
    normalAdContext.dispatch({ type: "city", payload: { id: id, fa: fa } });
  };
  const corHandler = (id, fa) => {
    normalAdContext.dispatch({
      type: "corporateTime",
      payload: { id: id, fa: fa },
    });
  };
  const salaryHandler = (id, fa) => {
    normalAdContext.dispatch({
      type: "salaryType",
      payload: { id: id, fa: fa },
    });
  };
  useEffect(() => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({
      ...buttonClass,
      [normalAdContext.data.corporateType]: "Ebutton_clicked ",
    });
  }, []);

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
          شرایط شغلی ما
        </div>
        <div className="d-flex justify-content-between col-12 px-5  ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="d-flex col-12 justify-content-between">
              <div className="col-5 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  عنوان
                </label>
                <input
                  className={
                    normalAdContext.data.title == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={normalAdContext.data.title}
                  onChange={(e) => {
                    normalAdContext.dispatch({
                      type: "title",
                      payload: e.target.value,
                    });
                  }}
                />
                <FieldError
                  data={normalAdContext.data.title}
                  display={display}
                />
              </div>
              <div className="col-5">
                <label
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  همکاری به صورت
                </label>
                <div className="d-flex">
                  <div
                    className={buttonClass[1]}
                    onClick={() => {
                      SetButtClass(1);
                      normalAdContext.dispatch({
                        type: "corporateType",
                        payload: 1,
                      });
                    }}
                  >
                    فقط حضوری
                  </div>
                  <div
                    className={buttonClass[2]}
                    onClick={() => {
                      SetButtClass(2);
                      normalAdContext.dispatch({
                        type: "corporateType",
                        payload: 2,
                      });
                    }}
                  >
                    فقط دورکاری
                  </div>
                  <div
                    className={buttonClass[3]}
                    onClick={() => {
                      SetButtClass(3);
                      normalAdContext.dispatch({
                        type: "corporateType",
                        payload: 3,
                      });
                    }}
                  >
                    هردو
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 11,
              }}
            >
              <SelectOption
                data={corporateTime}
                name="نوع همکاری"
                valueHandler={corHandler}
                predata={normalAdContext.data.corporateTime.fa}
              />
            </div>
            <FieldError
              data={normalAdContext.data.corporateTime.fa}
              display={display}
            />
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 10,
              }}
            >
              <SelectOption
                data={JobCats}
                name="دسته بندی شغلی"
                valueHandler={catHandler}
                predata={normalAdContext.data.jobCategory.fa}
              />
            </div>
            <FieldError
              data={normalAdContext.data.jobCategory.fa}
              display={display}
            />

            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 9,
              }}
            >
              <SelectOption
                data={Province}
                name="استان"
                valueHandler={provinceHandler}
                predata={normalAdContext.data.province.fa}
              />
            </div>
            <FieldError
              data={normalAdContext.data.province.fa}
              display={display}
            />
            {proId !== "" && (
              <div
                className="col-12"
                style={{
                  maxHeight: "6rem",
                  zIndex: 8,
                }}
              >
                
                <SelectOption
                  data={citi}
                  name="شهر"
                  valueHandler={cityHandler}
                  predata={normalAdContext.data.city.fa}
                />
                <FieldError
                  data={normalAdContext.data.city.fa}
                  display={display}
                />
              </div>
            )}

            <SalaryNeeded />
            <FieldError
              data={normalAdContext.data.salary.fa.to}
              display={display}
            />
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 7,
              }}
            >
              <SelectOption
                data={SalaryType}
                name="نحوه پرداخت حقوق"
                valueHandler={salaryHandler}
                predata={normalAdContext.data.salaryType.fa}
              />
            </div>
            <FieldError
              data={normalAdContext.data.salaryType.fa}
              display={display}
            />
            <WorkHours />
            <FieldError
              data={normalAdContext.data.workHour.fa.from}
              display={display}
            />
          </div>
        </div>

        <div className="col-12 px-5">
          <div className="d-flex   pt-4 col-5 justify-content-between">
            <div className=" ">
              <RadioButton
                title={"تقاضای بیمه"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={normalAdContext.data.insurrance}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"نیاز به سفر کاری"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={normalAdContext.data.insurrance}
              />
            </div>
          </div>
          <div
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 10,
            }}
          >
            <SelectOption
              data={JobCats}
              name="رده سازمان"
              valueHandler={catHandler}
              predata={normalAdContext.data.jobCategory.fa}
            />
          </div>
          <Options name="تسهیلات و مزایا" />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
