import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employeeContext/CreateAd/NormalAd/NormalAdContext";
import RadioButton from "../FormInputs/RadioButton";
import SelectOption from "../Resume/FormInputs/SelectOption";
import SalaryNeeded from "./SalaryNeeded";
import { JobCats } from "../../StaticData/JobCategory";
import { Province } from "../../StaticData/City";
import { Cities } from "../../StaticData/City";

const PersonalData = () => {
  const normalAdContext = useContext(NormalAdContext);

  let proId = normalAdContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const catHandler = (id, fa) => {
    normalAdContext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };

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
  const sexHandler = (sex) => {
    normalAdContext.dispatch({ type: "sex", payload: sex });
  };
  const marriedHandler = (mar) => {
    normalAdContext.dispatch({ type: "married", payload: mar });
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
          اطلاعات شخصی
        </div>
        <div className="d-flex justify-content-between col-12 px-4  ">
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
                zIndex: 15,
              }}
            >
              <SelectOption
                data={JobCats}
                name="دسته بندی شغلی"
                valueHandler={catHandler}
                predata={normalAdContext.data.jobCategory.fa}
              />
            </div>

            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 14,
              }}
            >
              <SelectOption
                data={Province}
                name="استان"
                valueHandler={provinceHandler}
                predata={normalAdContext.data.province.fa}
              />
            </div>
            {proId !== "" && (
              <div
                className="col-12"
                style={{
                  maxHeight: "6rem",
                  zIndex: 13,
                }}
              >
                <SelectOption
                  data={citi}
                  name="شهر"
                  valueHandler={cityHandler}
                  predata={normalAdContext.data.city.fa}
                />
              </div>
            )}

            <SalaryNeeded />
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex   pt-4 col-9 justify-content-between">
            <div className=" ">
              <RadioButton
                title={"جنسیت"}
                choices={{ 1: "مرد", 2: "زن" }}
                valueHandler={sexHandler}
                predata={normalAdContext.data.sex}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"وضعیت تاهل"}
                choices={{ 1: "مجرد", 2: "متاهل" }}
                valueHandler={marriedHandler}
                predata={normalAdContext.data.married}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"تقاضای بیمه"}
                choices={{ 1: "دارم", 2: "ندارم" }}
                valueHandler={insuranceHandler}
                predata={normalAdContext.data.insurrance}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
