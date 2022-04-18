import { useContext, useState } from "react";
import BirthDay from "./BirthDay";
import BirthDayEnglish from "./BirthDayEnglish";
import SelectOption from "./SelectOption";
import RadioButton from "../../FormInputs/RadioButton";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import SalaryNeededEn from "./SalaryNeededEn";
import SalaryNeeded from "./SalaryNeeded";
import SelectOptionEn from "./SelectOptionEn";
import { Province } from "../../../StaticData/City";
import { Cities } from "../../../StaticData/City";
import { JobCats } from "../../../StaticData/JobCategory";

const PersonalData = () => {
  const resumecontext = useContext(ResumeContext);

  let proId = resumecontext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const [buttonClass, setButtonClass] = useState({
    1: "Ebutton_clicked",
    2: "Ebutton",
    3: "Ebutton",
  });
  const handlePersonalProgress = (sec, item) => {
    sec !== "" && resumecontext.data.progressBar.c.push(item);
    resumecontext.dispatch({ type: "progressBar-c" });
  };
  const SetButtClass = (i) => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({ ...buttonClass, [i]: "Ebutton_clicked " });
  };
  const marriedHandler = (mar) => {
    resumecontext.dispatch({ type: "married", payload: mar });
  };
  const insuranceHandler = (ins) => {
    resumecontext.dispatch({ type: "insurrance", payload: ins });
  };
  const sexHandler = (sex) => {
    sex == 1
      ? resumecontext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "مرد" },
        })
      : resumecontext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "زن" },
        });
  };

  const catHandler = (id, fa) => {
    resumecontext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };
  // const EcatHandler = (id, en) => {
  //   resumecontext.dispatch({
  //     type: "jobCategory",
  //     payload: { id: id },
  //   });
  // };

  const provinceHandler = (id, name) => {
    resumecontext.dispatch({
      type: "province",
      payload: { id: id, name: name },
    });
  };
  const EprovinceHandler = (id, name) => {
    resumecontext.dispatch({
      type: "province",
      payload: { id: id, Ename: name },
    });
  };

  const cityHandler = (id, name) => {
    resumecontext.dispatch({ type: "city", payload: { id: id, name: name } });
  };
  const EcityHandler = (id, name) => {
    resumecontext.dispatch({ type: "city", payload: { id: id, Ename: name } });
  };
  return (
    <>
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
      <div className="d-flex justify-content-between col-12 px-4 ">
        <div className="d-flex flex-wrap pe-4 col-6 ">
          <div className="d-flex col-12 justify-content-between">
            <div className="col-5 mb-3">
              <label
                className="fs-6  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                نام
              </label>
              <input
                className={
                  resumecontext.data.name == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={resumecontext.data.name}
                onChange={(e) => {
                  resumecontext.dispatch({
                    type: "name",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-5">
              <label
                className="fs-6 "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                نام خانوادگی
              </label>
              <input
                className={
                  resumecontext.data.lastname == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={resumecontext.data.lastname}
                onChange={(e) => {
                  resumecontext.dispatch({
                    type: "lastname",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <BirthDay />
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
              predata={resumecontext.data.jobCategory.fa}
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
              predata={resumecontext.data.province.fa}
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
                name="منطقه"
                valueHandler={cityHandler}
                predata={resumecontext.data.city.fa}
              />
            </div>
          )}

          <SalaryNeeded />
        </div>
        <div className="d-flex flex-wrap col-6 ps-4  " dir="ltr">
          <div className="d-flex col-12 justify-content-between">
            <div className="col-5 mb-3  ">
              <label
                className="fs-6  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: 400,
                  fontFamily: "roboto",
                }}
              >
                Name
              </label>
              <input
                className={
                  resumecontext.data.Ename == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={resumecontext.data.Ename}
                onChange={(e) => {
                  resumecontext.dispatch({
                    type: "Ename",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-5 ">
              <label
                className="fs-6  "
                style={{
                  marginBottom: "0.5rem",
                  fontFamily: "roboto",
                  fontWeight: 400,
                }}
              >
                Last name
              </label>
              <input
                className={
                  resumecontext.data.Elastname == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={resumecontext.data.Elastname}
                onChange={(e) => {
                  resumecontext.dispatch({
                    type: "Elastname",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="d-flex flex-column   col-12 justify-content-between">
            <BirthDayEnglish />
          </div>

          <div
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 15,
            }}
          >
            {/* <SelectOptionEn
              data={JobCats}
              name="Job category"
              valueHandler={catHandler}
              // predata={ JobCats[resumecontext.data.jobCategory.id].en}
            /> */}
            <label
              className="fs-6 mt-3 "
              style={{
                marginBottom: "0.5rem",
                fontFamily: "roboto",
                fontWeight: 400,
              }}
            >
              Job category
            </label>
            <input
              className={
                resumecontext.data.jobCategory.fa == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              type="text"
              disabled
              value={
                resumecontext.data.jobCategory.id != ""
                  ? JobCats[resumecontext.data.jobCategory.id - 1].en
                  : ""
              }
            />
          </div>

          {/* <div
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 14,
            }}
          >
            <SelectOptionEn
              data={Province}
              name="State"
              valueHandler={provinceHandler}
              predata={resumecontext.data.province.en}
            />
          </div> */}
          <div
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 15,
            }}
          >
            <label
              className="fs-6 mt-3 "
              style={{
                marginBottom: "0.5rem",
                fontFamily: "roboto",
                fontWeight: 400,
              }}
            >
              State
            </label>
            <input
              className={
                resumecontext.data.province.fa == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              type="text"
              disabled
              value={
                resumecontext.data.province.id != ""
                  ? Province[resumecontext.data.province.id - 1].en
                  : ""
              }
            />
          </div>
          {proId !== "" && (
            // <div
            //   className="col-12"
            //   style={{
            //     maxHeight: "6rem",
            //     zIndex: 13,
            //   }}
            // >
            //   <SelectOptionEn
            //     data={citi}
            //     name="Region"
            //     valueHandler={cityHandler}
            //     predata={resumecontext.data.city.en}
            //   />
            // </div>
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 15,
              }}
            >
              <label
                className="fs-6 mt-3 "
                style={{
                  marginBottom: "0.5rem",
                  fontFamily: "roboto",
                  fontWeight: 400,
                }}
              >
                Region
              </label>
              <input
                className={
                  resumecontext.data.city.fa == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                disabled
                value={
                  resumecontext.data.city.id != ""
                    ? Cities[resumecontext.data.city.id - 1].en
                    : ""
                }
              />
            </div>
          )}
          <SalaryNeededEn />
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex   pt-4 col-9 justify-content-between">
          <div className=" ">
            <RadioButton
              title={"جنسیت"}
              choices={{ 1: "مرد", 2: "زن" }}
              valueHandler={sexHandler}
              predata={resumecontext.data.sex.id}
            />
          </div>
          <div className=" ">
            <RadioButton
              title={"وضعیت تاهل"}
              choices={{ 1: "مجرد", 2: "متاهل" }}
              valueHandler={marriedHandler}
              predata={resumecontext.data.married.id}
            />
          </div>
          <div className=" ">
            <RadioButton
              title={"تقاضای بیمه"}
              choices={{ 1: "دارم", 2: "ندارم" }}
              valueHandler={insuranceHandler}
              predata={resumecontext.data.insurrance.id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
