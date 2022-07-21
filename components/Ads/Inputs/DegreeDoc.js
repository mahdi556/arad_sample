import ButtonAdd from "components/Ads/Tools/ButtonAdd";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";
import BreakLine from "../Tools/BreakLine";
import AdContext from "context/Ad/AdContext";

const Divx = ({ i, data, dataHandler }) => {
  const [localData, setLocalData] = useState({
    id: data.id,
    title: data.title,
    degree: data.degree,
    date: data.date,
    active: data.active,
    Entitle: data.Entitle,
    Endegree: data.Endegree,
    Endate: data.Endate,
    Enactive: data.Enactive,
  });
  const datahandler = dataHandler;
  return (
    <>
      <div className="d-flex col-12  my-3 " id={i}>
        <div className="col-12 pe-3">
          <div className="col-12  mt-2">
            <label
              className="col-12"
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              آخرین مدرک تحصیلی
            </label>
            <input
              className={
                localData.title == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              type="text"
              onChange={(e) => {
                setLocalData({ ...localData, title: e.target.value });
                datahandler({ ...localData, title: e.target.value });
              }}
              value={localData.title}
            />
          </div>
          <div className="col-12">
            <label
              className="col-12"
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              رشته تحصیلی
            </label>
            <input
              className={
                localData.degree == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              type="text"
              onChange={(e) => {
                setLocalData({ ...localData, degree: e.target.value });
                datahandler({ ...localData, degree: e.target.value });
              }}
              value={localData.degree}
            />
          </div>

          <div className="d-flex flex-column pt-4 col-12   ">
            <div className="col-12">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                سال فارغ التحصیلی
              </label>
            </div>
            <div className="d-flex justify-content-start align-items-start flex-wrap col-12 ">
              <div className="d-flex col-6 justify-content-center align-items-start mb-3">
                {/* <div className="   input-group input-group-sm mx-2">
                  <input
                    className={
                      localData.date.d == ""
                        ? "col-8 inputStyle"
                        : "col-8 inputFilled"
                    }
                    onChange={(e) => {
                      setLocalData({
                        ...localData,
                        date: { ...localData.date, d: e.target.value },
                      });
                      datahandler({
                        ...localData,
                        date: { ...localData.date, d: e.target.value },
                      });
                    }}
                    value={localData.date.d}
                    type="text"
                  />
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#11999e",
                      height: "100%",
                      color: "#fff",
                      fontSize: 13,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      border: "none",
                      lineHeight: "1.5rem",
                    }}
                  >
                    روز
                  </span>
                </div> */}
                <div className="   input-group input-group-sm mx-2">
                  <input
                    className={
                      localData.date.m == ""
                        ? "col-8 inputStyle"
                        : "col-8 inputFilled"
                    }
                    type="text"
                    onChange={(e) => {
                      setLocalData({
                        ...localData,
                        date: { ...localData.date, m: e.target.value },
                      });
                      datahandler({
                        ...localData,
                        date: { ...localData.date, m: e.target.value },
                      });
                    }}
                    value={localData.date.m}
                  />
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#11999e",
                      // height: "100%",
                      color: "#fff",
                      fontSize: 13,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      border: "none",
                      lineHeight: "1.5rem",
                    }}
                  >
                    ماه
                  </span>
                </div>
                <div className="   input-group input-group-sm  ms-2">
                  <input
                    className={
                      data.date.y == ""
                        ? "col-8 inputStyle"
                        : "col-8 inputFilled"
                    }
                    onChange={(e) => {
                      setLocalData({
                        ...localData,
                        date: { ...localData.date, y: e.target.value },
                      });
                      datahandler({
                        ...localData,
                        date: { ...localData.date, y: e.target.value },
                      });
                    }}
                    value={localData.date.y}
                  />
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#11999e",
                      // height: "100%",
                      color: "#fff",
                      fontSize: 13,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      border: "none",
                      lineHeight: "1.5rem",
                    }}
                  >
                    سال
                  </span>
                </div>
              </div>
              <div
                className="d-flex align-items-center mt-2 ms-2"
                onClick={() => {
                  setLocalData({ ...localData, active: !localData.active });
                  datahandler({ ...localData, active: !localData.active });
                }}
              >
                <h6
                  className="me-2 pt-1"
                  style={
                    localData.active
                      ? {
                          color: "#e92b59",
                          fontSize: 16,
                        }
                      : { color: "#11999e", fontSize: 16 }
                  }
                >
                  مشغول به تحصیل هستم
                </h6>

                <img
                  className=""
                  src={
                    localData.active
                      ? "/assets/images/checked.png"
                      : "/assets/images/checkbox.png"
                  }
                  height={17}
                  width={17}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreakLine />
    </>
  );
};

const DegreeDoc = ({ handleStep }) => {
  const [hasEx, setHasEx] = useState(true);
  const [data, setData] = useState([]);
  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);
  const regData = () => {
    return new Promise((resolve, reject) => {
      setData(resumeContext.data.degree);
      if (data.length > 0) {
        resolve();
      }
    });
  };
  useEffect(() => {
    resumeContext.dispatch({
      type: "degree",
      payload: { data: data },
    });
  }, [data]);
  useEffect(async () => {
    await regData();
    setI(data.length);
  }, []);
  useEffect(() => {
    if (stepClick) {
      {
        setStepClick(false);
        setStep(step + 1);
      }
      setStepClick(false);
    }
  }, [stepClick, step]);
  const [i, setI] = useState(0);
  const dataHandler = (props) => {
    var index = data.findIndex((object) => {
      return object.id == props.id;
    });
    if (index !== -1) {
      data.splice(index, 1);
    }

    setData([
      ...data,
      {
        id: props.id,
        title: props.title,
        degree: props.degree,
        date: props.date,
        active: props.active,
        Entitle: props.Entitle,
        Endegree: props.Endegree,
        Endate: props.Endate,
        Enactive: props.Enactive,
      },
    ]);
  };
  const dataSender = (j) => {
    var index = data.findIndex((object) => {
      return object.id == j;
    });
    if (index !== -1) {
      return data[index];
    }
  };
  const handleHasEx = () => {
    hasEx && handleStep(5);
    setHasEx(!hasEx);
  };

  return (
    <>
      <SectionLayout marginTop={false} paddingTop={false}>
        <div className="d-flex align-items-center col-12   justify-content-between">
          <SectionTitle title="مدرک تحصیلی" />
          <div className="d-flex">
            <div
              className="d-flex align-items-center  "
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleHasEx();
                setData([]);
              }}
            >
              <h6
                className="me-2"
                style={
                  hasEx
                    ? {
                        color: "#11999e",
                      }
                    : { color: "#e92b59" }
                }
              >
                مدرک تحصیلی ندارم
              </h6>
              <img
                className=""
                src={
                  hasEx
                    ? "/assets/images/checkbox.png"
                    : "/assets/images/checked.png"
                }
                height={17}
                width={17}
              />
            </div>

            {/* {data.length < 1 && ( */}
            <div
              className="ms-3"
              onClick={() => {
                dataHandler({
                  id: i + 1,
                  title: "",
                  degree: "",
                  date: { d: "", m: "", y: "" },
                  active: false,
                  Entitle: "",
                  Endegree: "",
                  Endate: { d: "", m: "", y: "" },
                  Enactive: false,
                });
                setI(i + 1);
                setHasEx(true);
              }}
            >
              <ButtonAdd data={"افزودن مدرک تحصیلی"} />
            </div>
          </div>
          {/* )} */}
        </div>
        {data.map((item) => (
          <>
            <Divx
              i={item.id}
              data={dataSender(item.id)}
              dataHandler={dataHandler}
            />
          </>
        ))}
        {/* {data.length > 0 && (
          <div
            className="px-5"
            onClick={() => {
              dataHandler({
                id: data.length + 1,
                title: "",
                degree: "",
                date: { d: "", m: "", y: "" },
                active: false,
                Entitle: "",
                Endegree: "",
                Endate: { d: "", m: "", y: "" },
                Enactive: false,
              });
              setI(data.length + 1);
              setHasEx(true);
            }}
          >
            <ButtonAdd data={"افزودن"} />
          </div>
        )} */}
      </SectionLayout>
    </>
  );
};

export default DegreeDoc;
