import { useState } from "react";
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

const PersonalData = ({ personalHandler,predata }) => {
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
    married:1,
    insurrance: 1,
    province: "",
    city: "",
  });
  const sexHandler = (sex) => {
    sex == 1 ? setData({ ...data, sex: 1 }) : setData({ ...data, sex: 0 });
    personalHandler({ ...data, sex: sex });
  };
  const marriedHandler = (mar) => {
    mar == 1
      ? setData({ ...data, married: 1 })
      : setData({ ...data, married: 0 });
    personalHandler({ ...data, married: mar });
  };
  const insuranceHandler = (ins) => {
    ins == 1
      ? setData({ ...data, insurrance: 1 })
      : setData({ ...data, insurrance: 0 });
    personalHandler({ ...data, insurrance: ins });
  };
  const provinceHandler = (id, name) => {
    setData({ ...data, province: id });
    personalHandler({ ...data, province: id });
  };
  const cityHandler = (id, name) => {
    setData({ ...data, city: id });
    personalHandler({ ...data, city: id });
  };
  const birthdayHandler = (date) => {
    setData({
      ...data,
      birthday: { day: date.d, month: date.m, year: date.y },
    });
    personalHandler({
      ...data,
      birthday: { day: date.d, month: date.m, year: date.y },
    });
  };
  console.log(data)
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
            value={predata.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
              personalHandler({ ...data, title: e.target.value });
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
            value={predata.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
              personalHandler({ ...data, name: e.target.value });
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
            value={predata.lastname}
            onChange={(e) => {
              setData({ ...data, lastname: e.target.value });
              personalHandler({ ...data, lastname: e.target.value });
            }}
          />
        </div>
      </div>
      <BirthDay birthdayHandler={birthdayHandler} predata={predata.birthday} />
      <div className="d-flex   pt-4 col-6 justify-content-between">
        <div className=" ">
          <RadioButton
            title={"جنسیت"}
            choices={{ 1: "مرد", 2: "زن" }}
            valueHandler={sexHandler}
            predata={data.sex}
          />
        </div>
        {/* <div className=" ">
          <RadioButton
            title={"وضعیت تاهل"}
            choices={{ 1: "مجرد", 2: "متاهل" }}
            valueHandler={marriedHandler}
            predata={data.married}
          />
        </div> */}
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
        />
      </div>
      <div
        className="col-6"
        style={{
          maxHeight: "6rem",
          zIndex: 13,
        }}
      >
        <SelectOption data={cities} name="منطقه" valueHandler={cityHandler} />
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
        {/* <RadioButton
          title={"تقاضای بیمه"}
          choices={{ 1: "دارم", 2: "ندارم" }}
          valueHandler={insuranceHandler}
        /> */}
      </div>
    </>
  );
};

export default PersonalData;
