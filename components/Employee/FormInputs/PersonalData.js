import { useContext, useState } from "react";
import VipContext from "../../../context/employeeContext/VipContext";
import BirthDay from "./BirthDay";
import RadioButton from "./RadioButton";
import SalaryNeeded from "./SalaryNeeded";
import SelectOption from "./SelectOption";

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
  const vipContext = useContext(VipContext);

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
    vipContext.dispatch({ type: "sex", payload: sex });
  };
  const marriedHandler = (mar) => {
    vipContext.dispatch({ type: "married", payload: mar });
  };
  const insuranceHandler = (ins) => {
    vipContext.dispatch({ type: "insurrance", payload: ins });
  };

  const provinceHandler = (id, name) => {
    vipContext.dispatch({ type: "province", payload: { id: id, name: name } });
  };

  const cityHandler = (id, name) => {
    vipContext.dispatch({ type: "city", payload: { id: id, name: name } });
  };

  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
        }}
      >
        اطلاعات شخصی
      </div>
      <div className="d-flex  justify-content-between">
        <div className="col-5">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            عنوان
          </label>
          <input
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            value={vipContext.data.title}
            onChange={(e) => {
              vipContext.dispatch({ type: "title", payload: e.target.value });
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
            <div className={buttonClass[1]} onClick={() => SetButtClass(1)}>
              فقط حضوری
            </div>
            <div className={buttonClass[2]} onClick={() => SetButtClass(2)}>
              فقط دورکاری
            </div>
            <div className={buttonClass[3]} onClick={() => SetButtClass(3)}>
              هردو
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex  justify-content-between">
        <div className="col-5">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
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
            value={vipContext.data.name}
            onChange={(e) => {
              vipContext.dispatch({ type: "name", payload: e.target.value });
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
            value={vipContext.data.lastname}
            onChange={(e) => {
              vipContext.dispatch({
                type: "lastname",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <BirthDay />
      <div className="d-flex   pt-4 col-6 justify-content-between">
        <div className=" ">
          <RadioButton
            title={"جنسیت"}
            choices={{ 1: "مرد", 2: "زن" }}
            valueHandler={sexHandler}
            predata={vipContext.data.sex}
          />
        </div>
        <div className=" ">
          <RadioButton
            title={"وضعیت تاهل"}
            choices={{ 1: "مجرد", 2: "متاهل" }}
            valueHandler={marriedHandler}
            predata={vipContext.data.married}
          />
        </div>
      </div>
      <div
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
        className="col-6"
        style={{
          maxHeight: "6rem",
          zIndex: 14,
        }}
      >
        <SelectOption
          data={cities}
          name="استان"
          valueHandler={provinceHandler}
          predata={vipContext.data.province.name}
        />
      </div>
      <div
        className="col-6"
        style={{
          maxHeight: "6rem",
          zIndex: 13,
        }}
      >
        <SelectOption
          data={cities}
          name="منطقه"
          valueHandler={cityHandler}
          predata={vipContext.data.city.name}
        />
      </div>

      <div
        style={{
          maxHeight: "6rem",
          zIndex: 12,
        }}
      >
        <SelectOption
          data={cities}
          name="سابقه کاری"
          valueHandler={catHandler}
        />
      </div>
      <SalaryNeeded />

      <div className="col-12">
        <RadioButton
          title={"تقاضای بیمه"}
          choices={{ 1: "دارم", 2: "ندارم" }}
          valueHandler={insuranceHandler}
          predata={vipContext.data.insurrance}
        />
      </div>
    </>
  );
};

export default PersonalData;
