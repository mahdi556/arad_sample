import { useContext, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import BirthDay from "./BirthDay";
import RadioButton from "./RadioButton";
import SalaryNeeded from "./SalaryNeeded";
import SelectOption from "./SelectOption";

 
const PersonalData = () => {
  const normalAdContext = useContext(NormalAdContext);

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
    normalAdContext.dispatch({ type: "sex", payload: sex });
  };
  const marriedHandler = (mar) => {
    normalAdContext.dispatch({ type: "married", payload: mar });
  };
  const insuranceHandler = (ins) => {
    normalAdContext.dispatch({ type: "insurrance", payload: ins });
  };

  const provinceHandler = (id, name) => {
    normalAdContext.dispatch({ type: "province", payload: { id: id, name: name } });
  };

  const cityHandler = (id, name) => {
    normalAdContext.dispatch({ type: "city", payload: { id: id, name: name } });
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
            value={normalAdContext.data.title}
            onChange={(e) => {
              normalAdContext.dispatch({ type: "title", payload: e.target.value });
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
            value={normalAdContext.data.name}
            onChange={(e) => {
              normalAdContext.dispatch({ type: "name", payload: e.target.value });
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
            value={normalAdContext.data.lastname}
            onChange={(e) => {
              normalAdContext.dispatch({
                type: "lastname",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column pt-4 col-6 justify-content-between">
        <BirthDay />
      </div>

      <div className="d-flex   pt-4 col-6 justify-content-between">
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
          predata={normalAdContext.data.province.name}
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
          predata={normalAdContext.data.city.name}
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
          predata={normalAdContext.data.insurrance}
        />
      </div>
    </>
  );
};

export default PersonalData;
