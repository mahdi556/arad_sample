import { useState } from "react";
import StepButton from "./StepButton";
import SelectOption from "./SelectOption";
import ButtonTag from "./ButtonTag";
 import SoftExpert from "./SoftExpert";
const JobConditionVip = (props) => {
  const [cubeSwitch, setCubeSwitch] = useState({
    yes: "cubeSwitchGreen",
    no: "cubeSwitch",
  });

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
        شرایط شغلی ما
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
          <input className="col-12 mb-3 inputStyle" type="text" />
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
          name="دسته بندی"
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
          name="نوع همکاری"
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
        <SelectOption data={cities} name="شهر" valueHandler={catHandler} />
      </div>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            میزان حقوق دریافتی
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
      <div
        className="col-12"
        style={{
          maxHeight: "6rem",
          zIndex: 7,
        }}
      >
        <SelectOption
          data={cities}
          name=" نحوه پرداخت حقوق"
          valueHandler={catHandler}
        />
      </div>
      <div className="d-flex flex-column pt-4 col-12 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            ساعات کاری
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
            <input className="col-8 me-auto inputStyle " type="text" />
            <h6>ساعت</h6>
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
            <input className="col-8 me-auto inputStyle" type="text" />
            <h6>ساعت</h6>
          </div>
        </div>
      </div>
      <div className="col-5">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          بیمه
        </label>
        <div className="d-flex">
          <div
            className={cubeSwitch["yes"]}
            onClick={() =>
              setCubeSwitch({
                yes: "cubeSwitchGreen",
                no: "cubeSwitch",
              })
            }
          >
            دارد
          </div>
          <div
            className={cubeSwitch["no"]}
            onClick={() =>
              setCubeSwitch({
                yes: "cubeSwitch",
                no: "cubeSwitchRed",
              })
            }
          >
            ندارد
          </div>
        </div>
      </div>
      <div className="col-5">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          نیاز به سفر کاری
        </label>
        <div className="d-flex">
          <div
            className={cubeSwitch["yes"]}
            onClick={() =>
              setCubeSwitch({
                yes: "cubeSwitchGreen",
                no: "cubeSwitch",
              })
            }
          >
            دارد
          </div>
          <div
            className={cubeSwitch["no"]}
            onClick={() =>
              setCubeSwitch({
                yes: "cubeSwitch",
                no: "cubeSwitchRed",
              })
            }
          >
            ندارد
          </div>
        </div>
      </div>
      <div
        style={{
          maxHeight: "6rem",
          zIndex: 6,
        }}
      >
        <SelectOption
          data={cities}
          name="رده سازمان"
          valueHandler={catHandler}
        />
      </div>
      <div
        style={{
          maxHeight: "6rem",
          zIndex: 6,
        }}
      >
        <SelectOption
          data={cities}
          name="تسهیلات و مزایا"
          valueHandler={catHandler}
        />
      </div>
      <div className="d-flex flex-wrap">
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
        <ButtonTag data={"وام"} />
      </div>

      {step < 3 && <StepButton handleStep={handleStep} step={3} ph={"53%"} />}

      {step >= 3 && (
        <>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-flui "
              src= "../../../../assets/images/line.png" 
              width="100%"
            />
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            انتظار ما از شما
          </div>
          <div className="d-flex flex-column  col-6 justify-content-between">
            <div className="col-12">
              <label
                style={{
                  // marginBottom: "0.1rem",
                  fontSize: "1rem",
                }}
              >
                محدوده سنی
              </label>
            </div>
            <div className="d-flex col-12 justify-content-center">
              از
              <div
                className="d-flex  mb-3 me-1 ms-2 pe-2"
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                  alignItems: "center",
                  width: "49%",
                }}
              >
                <input className="col-8 me-auto inputStyle" type="text" />
                <h6>سال</h6>
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
                <input className="col-8 me-auto inputStyle" type="text" />
                <h6>سال</h6>
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              maxHeight: "6rem",
              zIndex: 7,
            }}
          >
            <SelectOption data={cities} name="شهر" valueHandler={catHandler} />
          </div>
          <div className="d-flex flex-column col-12 pt-4 justify-content-between">
            <div className="col-12">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                میزان حقوق دریافتی
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
                <input className="col-8 me-auto inputStyle" type="text" />
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
                <input className="col-8 me-auto inputStyle  " type="text" />
                <h6>تومان</h6>
              </div>
            </div>
            <div className="mt-5">
              <SoftExpert name={'مهارت نرم افزاری'} />
            </div>
            <div className="mt-5">
              <SoftExpert name={'زبان'}/>
            </div>
          </div>
        </>
      )}

      {step == 3 && <StepButton handleStep={handleStep} step={4} ph={"75%"} />}
      {step >= 4 && (
        <>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-flui "
              src= "../../../../assets/images/line.png" 
              width="100%"
            />
          </div>

          <div className="d-flex  justify-content-between">
            <div className="col-12">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                توضیحات آگهی
              </label>
              <textarea
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                  height: "10rem",
                }}
                type="text"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobConditionVip;
