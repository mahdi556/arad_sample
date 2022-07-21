import AdContext from "context/Ad/AdContext";
import { useEffect, useState, useContext } from "react";

const Circle = ({ type, step }) => {
  const [top, setTop] = useState("5%");
  const heightSetting = () => {
    switch (step) {
      case 1:
        type == "ev"
          ? setTop("2%")
          : type == "en"
          ? setTop("2%")
          : type == "rv"
          ? setTop("2%")
          : type == "rn"
          ? setTop("2%")
          : null;
        break;
      case 2:
        type == "ev"
          ? setTop("20%")
          : type == "en"
          ? setTop("50%")
          : type == "rv"
          ? setTop("22%")
          : type == "rn"
          ? setTop("30%")
          : null;
        break;
      case 3:
        type == "ev"
          ? setTop("25%")
          : type == "en"
          ? setTop("93%")
          : type == "rv"
          ? setTop("42%")
          : type == "rn"
          ? setTop("60%")
          : null;
        break;
      case 4:
        type == "ev"
          ? setTop("35%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("62%")
          : type == "rn"
          ? setTop("95%")
          : null;
        break;
      case 5:
        type == "ev"
          ? setTop("47%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("82%")
          : null;
        break;
      case 6:
        type == "ev"
          ? setTop("60%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("94%")
          : null;
        break;
      case 7:
        type == "ev" ? setTop("80%") : type == "en" ? setTop("5%") : null;
        break;
      case 8:
        type == "ev"
          ? setTop("93%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("5%")
          : type == "rn"
          ? setTop("5%")
          : null;
        break;
      default:
        setTop("5%");
    }
  };
  useEffect(() => {
    heightSetting();
  }, [step]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: top,
          right: "25%",
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      ></div>
    </>
  );
};
const Tick = ({ step, type }) => {
  const [top, setTop] = useState("5%");
  const heightSetting = () => {
    switch (step) {
      case 1:
        type == "ev"
          ? setTop("5%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("5%")
          : type == "rn"
          ? setTop("5%")
          : null;
        break;
      case 2:
        type == "ev"
          ? setTop("15%")
          : type == "en"
          ? setTop("55%")
          : type == "rv"
          ? setTop("25%")
          : type == "rn"
          ? setTop("35%")
          : null;
        break;
      case 3:
        type == "ev"
          ? setTop("25%")
          : type == "en"
          ? setTop("98%")
          : type == "rv"
          ? setTop("45%")
          : type == "rn"
          ? setTop("65%")
          : null;
        break;
      case 4:
        type == "ev"
          ? setTop("35%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("65%")
          : type == "rn"
          ? setTop("98%")
          : null;
        break;
      case 5:
        type == "ev"
          ? setTop("47%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("85%")
          : null;
        break;
      case 6:
        type == "ev"
          ? setTop("60%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("94%")
          : null;
        break;
      case 7:
        type == "ev" ? setTop("75%") : type == "en" ? setTop("5%") : null;
        break;
      case 8:
        type == "ev"
          ? setTop("85%")
          : type == "en"
          ? setTop("5%")
          : type == "rv"
          ? setTop("5%")
          : type == "rn"
          ? setTop("5%")
          : null;
        break;
      default:
        setTop("5%");
    }
  };
  useEffect(() => {
    heightSetting();
  }, [step]);

  return (
    <>
      <img
        className="img-fluid "
        src="../../../../assets/images/progress.png"
        style={{
          position: "absolute",
          top: top,
        }}
        width="80%"
      />
    </>
  );
};

const VerticalProgress = () => {
  const { step, type } = useContext(AdContext);
  const [p_height, setP_height] = useState("5%");
  const heightSetting = () => {
    switch (step) {
      case 1:
        type == "ev"
          ? setP_height("5%")
          : type == "en"
          ? setP_height("5%")
          : type == "rv"
          ? setP_height("5%")
          : type == "rn"
          ? setP_height("5%")
          : null;
        break;
      case 2:
        type == "ev"
          ? setP_height("25%")
          : type == "en"
          ? setP_height("55%")
          : type == "rv"
          ? setP_height("25%")
          : type == "rn"
          ? setP_height("35%")
          : null;
        break;
      case 3:
        type == "ev"
          ? setP_height("28%")
          : type == "en"
          ? setP_height("98%")
          : type == "rv"
          ? setP_height("45%")
          : type == "rn"
          ? setP_height("65%")
          : null;
        break;
      case 4:
        type == "ev"
          ? setP_height("38%")
          : type == "en"
          ? setP_height("5%")
          : type == "rv"
          ? setP_height("65%")
          : type == "rn"
          ? setP_height("98%")
          : null;
        break;
      case 5:
        type == "ev"
          ? setP_height("50%")
          : type == "en"
          ? setP_height("5%")
          : type == "rv"
          ? setP_height("85%")
          : null;
        break;
      case 6:
        type == "ev"
          ? setP_height("65%")
          : type == "en"
          ? setP_height("5%")
          : type == "rv"
          ? setP_height("98%")
          : null;
        break;
      case 7:
        type == "ev"
          ? setP_height("85%")
          : type == "en"
          ? setP_height("5%")
          : null;
        break;
      case 8:
        type == "ev"
          ? setP_height("98%")
          : type == "en"
          ? setP_height("5%")
          : type == "rv"
          ? setP_height("5%")
          : type == "rn"
          ? setP_height("5%")
          : null;
        break;
      default:
        setP_height("5%");
    }
  };
  useEffect(() => {
    heightSetting();
  }, [step]);
  return (
    <div
      className="sticky-top"
      style={{
        paddingTop: "4rem",
      }}
    >
      <div
        className="d-flex flex-column    align-items-center bg-white py-3 "
        style={{
          borderRadius: 18,
          width: "5%",
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: 30,
            backgroundColor: "#E92B59",
            zIndex: 2,
          }}
        ></div>
        <div
          style={{
            marginTop: -10,
            width: 20,
            height: "70vh",
            borderRadius: 20,
            backgroundColor: "rgba(251,217,225,1)",
            position: "relative",
            zIndex: 0,
          }}
        >
          {step == 1 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={1} />
          )}
          {step <= 2 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={2} />
          )}
          {step <= 3 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={3} />
          )}
          {step <= 4 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={4} />
          )}
          {step <= 5 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={5} />
          )}
          {step <= 6 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={6} />
          )}
          {step <= 7 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={7} />
          )}
          {step <= 8 ? (
            <Circle type={type} step={step} />
          ) : (
            <Tick type={type} step={8} />
          )}
          <div
            style={{
              display: "flex",
              width: "100%",
              height: p_height,
              backgroundColor: "#E92B59",
              borderRadius: 10,
              justifyContent: "center",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: -10,
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: 30,
            backgroundColor: "rgba(251,217,225,1)",
            justifyContent: "center",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "rgba(251,217,225,1)",
            zIndex: 2,
          }}
        ></div>
      </div>
    </div>
  );
};
export default VerticalProgress;
