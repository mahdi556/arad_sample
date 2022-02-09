import { useContext, useState } from "react";
import BirthDay from "./BirthDay";
import BirthDayEnglish from "./BirthDayEnglish";
import SelectOption from "../../FormInputs/SelectOption";
import RadioButton from "../../FormInputs/RadioButton";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import SalaryNeededEn from "./SalaryNeededEn";
import SalaryNeeded from "./SalaryNeeded";

const cities = [
  { id: 1, name: "اصفهان" },
  { id: 2, name: "تهران" },
  { id: 3, name: "شیراز" },
  { id: 4, name: "تبریز" },
  { id: 5, name: "قم" },
  { id: 6, name: "ملایر" },
  { id: 7, name: "زنجان" },
  { id: 8, name: "بادرود" },
  { id: 9, name: "تویسرکان" },
  { id: 10, name: "امیدیه" },
];

const PersonalData = () => {
  const resumecontext = useContext(ResumeContext);

  const catHandler = (id, name) => {
    setCat({ id: id, name: name });
  };

  const [buttonClass, setButtonClass] = useState({
    1: "Ebutton_clicked",
    2: "Ebutton",
    3: "Ebutton",
  });

  const SetButtClass = (i) => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({ ...buttonClass, [i]: "Ebutton_clicked " });
  };
  const sexHandler = (sex) => {
    resumecontext.dispatch({ type: "sex", payload: sex });
  };
  const marriedHandler = (mar) => {
    resumecontext.dispatch({ type: "married", payload: mar });
  };
  const insuranceHandler = (ins) => {
    resumecontext.dispatch({ type: "insurrance", payload: ins });
  };

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
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
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
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
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
              data={cities}
              name="دسته بندی شغلی"
              valueHandler={catHandler}
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
              data={cities}
              name="استان"
              valueHandler={provinceHandler}
              predata={resumecontext.data.province.name}
            />
          </div>
          <div
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 13,
            }}
          >
            <SelectOption
              data={cities}
              name="منطقه"
              valueHandler={cityHandler}
              predata={resumecontext.data.city.name}
            />
          </div>

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
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
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
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
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
            <SelectOption
              data={cities}
              name="Job category"
              valueHandler={catHandler}
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
              data={cities}
              name="State"
              valueHandler={EprovinceHandler}
              predata={resumecontext.data.province.Ename}
            />
          </div>
          <div
            className="col-12"
            className="col-12"
            style={{
              maxHeight: "6rem",
              zIndex: 13,
            }}
          >
            <SelectOption
              data={cities}
              name="Region"
              valueHandler={EcityHandler}
              predata={resumecontext.data.city.Ename}
            />
          </div>

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
              predata={resumecontext.data.sex}
            />
          </div>
          <div className=" ">
            <RadioButton
              title={"وضعیت تاهل"}
              choices={{ 1: "مجرد", 2: "متاهل" }}
              valueHandler={marriedHandler}
              predata={resumecontext.data.married}
            />
          </div>
          <div className=" ">
            <RadioButton
              title={"تقاضای بیمه"}
              choices={{ 1: "دارم", 2: "ندارم" }}
              valueHandler={insuranceHandler}
              predata={resumecontext.data.insurrance}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
