import { useContext, useEffect, useState } from "react";
import RadioButton from "../FormInputs/RadioButton";
import SelectOption from "../Resume/FormInputs/SelectOption";
import SalaryNeeded from "./SalaryNeeded";
import { JobCats } from "../../StaticData/JobCategory";
import { Province } from "../../StaticData/City";
import { Cities } from "../../StaticData/City";
import BirthDay from "./BirthDay";
import style from "../VipAd/FormInputs/FormStyles/form.module.css";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
const PersonalData = () => {
  const resumeContext = useContext(ResumeContext);
  let proId = resumeContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const catHandler = (id, fa) => {
    resumeContext.dispatch({
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
    resumeContext.dispatch({ type: "progressBar-c" });
  };
  const SetButtClass = (i) => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({ ...buttonClass, [i]: "Ebutton_clicked " });
  };
  const sexHandler = (sex) => {
    sex == 1
      ? resumeContext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "مرد" },
        })
      : resumeContext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "زن" },
        });
  };
  const marriedHandler = (mar) => {
    resumeContext.dispatch({ type: "married", payload: mar });
  };
  const insuranceHandler = (ins) => {
    resumeContext.dispatch({ type: "insurrance", payload: ins });
  };

  const provinceHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "province",
      payload: { id: id, fa: fa },
    });
  };

  const cityHandler = (id, fa) => {
    resumeContext.dispatch({ type: "city", payload: { id: id, fa: fa } });
  };

  useEffect(() => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({
      ...buttonClass,
      [resumeContext.data.corporateType]: "Ebutton_clicked ",
    });
  }, []);

  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2 px-5">
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
        <div className="d-flex justify-content-between col-12    ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="d-flex col-12 justify-content-between">
              <div className="col-5 ">
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
                    resumeContext.data.title == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={resumeContext.data.title}
                  onChange={(e) => {
                    resumeContext.dispatch({
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
                      resumeContext.dispatch({
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
                      resumeContext.dispatch({
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
                      resumeContext.dispatch({
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
                predata={resumeContext.data.jobCategory.fa}
              />
            </div>

            <div className="d-flex col-12 justify-content-between">
              <div
                className={proId === "" ? "col-12 pt-2" : "col-5 pt-2"}
                style={{
                  maxHeight: "6rem",
                  zIndex: 14,
                }}
              >
                <SelectOption
                  data={Province}
                  name="استان"
                  valueHandler={provinceHandler}
                  predata={resumeContext.data.province.fa}
                />
              </div>
              {proId !== "" && (
                <div
                  className="col-5 pt-2"
                  style={{
                    maxHeight: "6rem",
                    zIndex: 13,
                  }}
                >
                  <SelectOption
                    data={citi}
                    name="شهر"
                    valueHandler={cityHandler}
                    predata={resumeContext.data.city.fa}
                  />
                </div>
              )}
            </div>
            <div className="col-6 pt-4">
              <BirthDay />
            </div>
            <div className="col-12 mb-5 mt-4">
              <SalaryNeeded />
            </div>
          </div>
        </div>

        <div className="col-12 ">
          <div className="d-flex   pt-4 col-12 justify-content-between">
            <div className=" ">
              <RadioButton
                title={"جنسیت"}
                choices={{ 1: "مرد", 2: "زن" }}
                valueHandler={sexHandler}
                predata={resumeContext.data.sex.id}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"وضعیت تاهل"}
                choices={{ 1: "مجرد", 2: "متاهل" }}
                valueHandler={marriedHandler}
                predata={resumeContext.data.married}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"تقاضای بیمه"}
                choices={{ 1: "دارم", 2: "ندارم" }}
                valueHandler={insuranceHandler}
                predata={resumeContext.data.insurrance}
              />
            </div>
          </div>
          <div className="col-12 mb-3 mt-5">
            <label
              className="fs-6  "
              style={{
                marginBottom: "0.5rem",
                fontWeight: "normal",
              }}
            >
              توضیحات آگهی
            </label>
            <textarea
              className={
                resumeContext.data.title == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              type="text"
              value={resumeContext.data.description}
              onChange={(e) => {
                resumeContext.dispatch({
                  type: "description",
                  payload: e.target.value,
                });
              }}
              style={{
                height: 150,
              }}
            />
          </div>
        </div>
        <div
          className="d-flex align-items-center"
          onClick={() =>
            resumeContext.dispatch({
              type: "military",
              payload: !resumeContext.data.military,
            })
          }
        >
          <h3 className={`${style.txt3} pe-3 pt-1`}>
            سربازی را به اتمام رسانده یا معاف هستم
          </h3>
          <img
            src={
              resumeContext.data.military
                ? "/assets/images/checked.png"
                : "/assets/images/checkbox_black.svg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
