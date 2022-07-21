import { useState } from "react";
import StepButton from "./StepButton";
import SelectOption from "./SelectOption";
import RadioButton from "./RadioButton";
const JobCondition = (props) => {
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
  const [p_height, setP_height] = useState("10%");

  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
    handleStep2(sn, ph);
  };

  const handleStep2 = props.handleStep;

  const [step, setStep] = useState(props.step);

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
  const [cat, setCat] = useState({ id: null, name: null });
  const catHandler = (id, name) => {
    setCat({ id: id, name: name });
  };

  return (
    <div className="row pt-4 pb-4 mt-4 sec2 ">
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
      <div
        style={{
          maxHeight: "6rem",
          zIndex: 10,
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
          zIndex: 8,
        }}
      >
        <SelectOption data={cities} name="استان" valueHandler={catHandler} />
      </div>
      <div
        className="col-6"
        style={{
          maxHeight: "6rem",
          zIndex: 7,
        }}
      >
        <SelectOption data={cities} name="منطقه" valueHandler={catHandler} />
      </div>
      <div
        style={{
          maxHeight: "6rem",
          zIndex: 9,
        }}
      >
        <SelectOption
          data={cities}
          name="وضعیت نظام وظیفه"
          valueHandler={catHandler}
        />
      </div>
      <div
        style={{
          maxHeight: "6rem",
          zIndex: 9,
        }}
      >
        <SelectOption
          data={cities}
          name="سابقه کاری"
          valueHandler={catHandler}
        />
      </div>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            میزان حقوق درخواستی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center">
          از
          <div
            className="d-flex   mb-3 me-1 ms-2 pe-2"
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
              alignItems: "center",
              width: "49%",
            }}
          >
            <input
              className="col-8 me-auto form-input"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
            />
            <h6>تومان</h6>
          </div>
          تا
          <div
            className="d-flex   mb-3 me-1 ms-2 pe-2"
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
              alignItems: "center",
              width: "49%",
            }}
          >
            <input
              className="col-8 me-auto form-input"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
            />
            <h6>تومان</h6>
          </div>
        </div>
      </div>

      <div className="col-4">
        <RadioButton title={'تقاضای بیمه'} choices={{1:'دارم',2:'ندارم'}} />
      </div>
      <div className="col-4">
        <RadioButton title={'جنسیت'} choices={{1:'مرد',2:'زن'}} />
      </div>
      <div className="col-4">
        <RadioButton title={'وضعیت تاهل'} choices={{1:'مجرد',2:'متاهل'}} />  
     </div>

      {step < 3 && <StepButton handleStep={handleStep} step={3} ph={"97%"} />}

      <></>
    </div>
  );
};

export default JobCondition;
