import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
  
import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import BreakLine from "./BreakLine";

const Divx = ({ i, data, dataHandler }) => {
  const [localData, setLocalData] = useState({
    id: data.id,
    title: data.title,
    name: data.name,
    reason: data.reason,
    start: data.start,
    finish: data.finish,
    active: data.active,
    Entitle: data.Entitle,
    Enname: data.Enname,
    Enreason: data.Enreason,
    Enstart: data.Enstart,
    Enfinish: data.Enfinish,
    Enactive: data.Enactive,
  });
  const datahandler = dataHandler;

  return (
    <>
      <div className="col-6">
        <div className="col-12" id={i}>
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            عنوان شغلی
          </label>
          <input
            className={
              data.title == ""
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
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            نام سازمان
          </label>
          <input
            className={
              data.name == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, name: e.target.value });
              datahandler({ ...localData, name: e.target.value });
            }}
            value={localData.name}
          />
        </div>
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            دلیل ترک (اختیاری)
          </label>
          <input
            className={
              data.reason == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, reason: e.target.value });
              datahandler({ ...localData, reason: e.target.value });
            }}
            value={localData.reason}
          />
        </div>
        <div className="d-flex flex-column pt-4 col-12  ">
          <div className="col-12 mb-2">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              میزان سابقه
            </label>
          </div>
          <div className="d-flex justify-content-between flex-wrap col-10 ">
            <div className="d-flex col-12 justify-content-center align-items-center mb-3">
              شروع
              <div className="   input-group input-group-sm mx-2">
                <input
                  className={
                    data.start.m == ""
                      ? "col-8 inputStyle"
                      : "col-8 inputFilled"
                  }
                  type="text"
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      start: { ...localData.start, m: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      start: { ...localData.start, m: e.target.value },
                    });
                  }}
                  value={localData.start.m}
                />
                <span
                  className="input-group-text col-4"
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
                  ماه
                </span>
              </div>
              <div className="   input-group input-group-sm  ms-2">
                <input
                  className={
                    data.start.y == ""
                      ? "col-8 inputStyle"
                      : "col-8 inputFilled"
                  }
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      start: { ...localData.start, y: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      start: { ...localData.start, y: e.target.value },
                    });
                  }}
                  value={localData.start.y}
                />
                <span
                  className="input-group-text col-4"
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
                  سال
                </span>
              </div>
            </div>

            <div className="d-flex col-12 justify-content-center align-items-center mb-3">
              پایان
              <div className="   input-group input-group-sm mx-2">
                <input
                  className={
                    data.finish.m == ""
                      ? "col-8 inputStyle"
                      : "col-8 inputFilled"
                  }
                  type="text"
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      finish: { ...localData.finish, m: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      finish: { ...localData.finish, m: e.target.value },
                    });
                  }}
                />
                <span
                  className="input-group-text col-4"
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
                  ماه
                </span>
              </div>
              <div className="   input-group input-group-sm  ms-2">
                <input
                  className={
                    data.finish.y == ""
                      ? "col-8 inputStyle"
                      : "col-8 inputFilled"
                  }
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      finish: { ...localData.finish, y: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      finish: { ...localData.finish, y: e.target.value },
                    });
                  }}
                />
                <span
                  className="input-group-text col-4"
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
                  سال
                </span>
              </div>
            </div>

            <div
              className="d-flex align-items-center"
              onClick={() => {
                setLocalData({ ...localData, active: !localData.active });
                datahandler({ ...localData, active: !localData.active });
              }}
            >
              <h6
                className="me-2"
                style={
                  localData.active
                    ? {
                        color: "#e92b59",
                        fontSize: 16,
                      }
                    : { color: "#11999e", fontSize: 16 }
                }
              >
                مشغول به کار هستم
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
      <div className="col-6" dir="ltr">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Job Title
          </label>
          <input
            className={
              data.Entitle == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Entitle: e.target.value });
              datahandler({ ...localData, Entitle: e.target.value });
            }}
            value={localData.Entitle}
          />
        </div>
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            name of organization
          </label>
          <input
            className={
              data.Enname == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Enname: e.target.value });
              datahandler({ ...localData, Enname: e.target.value });
            }}
            value={localData.Enname}
          />
        </div>
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Reason for leaving
          </label>
          <input
            className={
              data.Enreason == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Enreason: e.target.value });
              datahandler({ ...localData, Enreason: e.target.value });
            }}
            value={localData.Enreason}
          />
        </div>
        <div className="d-flex flex-column pt-4 col-12  ">
          <div className="col-12 mb-2">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              Work Experience
            </label>
          </div>
          <div className="d-flex justify-content-between flex-wrap col-10 ">
            <div className="d-flex col-12 justify-content-center align-items-center mb-3">
              Start
              <div className="   input-group input-group-sm mx-2" dir="rtl">
                <input
                  className={
                    data.Enstart.m == ""
                      ? "col-7 inputStyle"
                      : "col-7 inputFilled"
                  }
                  type="text"
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Enstart: { ...localData.Enstart, m: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Enstart: { ...localData.Enstart, m: e.target.value },
                    });
                  }}
                  value={localData.Enstart.m}
                />
                <span
                  className="input-group-text col-4"
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
                  Month
                </span>
              </div>
              <div className="   input-group input-group-sm  ms-2" dir="rtl">
                <input
                  className={
                    data.Enstart.y == ""
                      ? "col-7 inputStyle"
                      : "col-7 inputFilled"
                  }
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Enstart: { ...localData.Enstart, y: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Enstart: { ...localData.Enstart, y: e.target.value },
                    });
                  }}
                  value={localData.Enstart.y}
                />
                <span
                  className="input-group-text col-4"
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
                  Year
                </span>
              </div>
            </div>

            <div className="d-flex col-12 justify-content-center align-items-center mb-3">
              Finish
              <div className="   input-group input-group-sm mx-2" dir="rtl">
                <input
                  className={
                    data.Enfinish.m == ""
                      ? "col-7 inputStyle"
                      : "col-7 inputFilled"
                  }
                  type="text"
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Enfinish: { ...localData.Enfinish, m: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Enfinish: { ...localData.Enfinish, m: e.target.value },
                    });
                  }}
                  value={localData.Enfinish.m}
                />
                <span
                  className="input-group-text col-4"
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
                  Month
                </span>
              </div>
              <div className="   input-group input-group-sm  ms-2 " dir="rtl">
                <input
                  className={
                    data.Enfinish.y == ""
                      ? "col-8 inputStyle"
                      : "col-8 inputFilled"
                  }
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Enfinish: { ...localData.Enfinish, y: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Enfinish: { ...localData.Enfinish, y: e.target.value },
                    });
                  }}
                  value={localData.Enfinish.y}
                />

                <span
                  className="input-group-text col-4"
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
                  Year
                </span>
              </div>
            </div>

            <div
              className="d-flex align-items-center"
              onClick={() => {
                setLocalData({ ...localData, Enactive: !localData.Enactive });
                datahandler({ ...localData, Enactive: !localData.Enactive });
              }}
            >
              <h6
                className="ms-2"
                style={
                  localData.Enactive
                    ? {
                        color: "#e92b59",
                        fontSize: 16,
                      }
                    : { color: "#11999e", fontSize: 16 }
                }
              >
                I am Working
              </h6>
              <div>
                <img
                  className=""
                  src={
                    localData.Enactive
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

const JoBExperience = () => {
  const resumeContext = useContext(ResumeContext);
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([]);
  const regData = () => {
    return new Promise((resolve, reject) => {
      setData(resumeContext.data.experiences);
      if (data.length > 0) {
        resolve();
      }
    });
  };
  useEffect(() => {
    resumeContext.dispatch({
      type: "experiences",
      payload: { data: data },
    });
  }, [data]);
  useEffect(async () => {
    await regData();
    setI(data.length);
  }, []);
  const [i, setI] = useState(0);

  const indexHandler = (props) => {
    return new Promise((resolve, reject) => {
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
          name: props.name,
          reason: props.reason,
          start: props.start,
          finish: props.finish,
          active: props.active,
          Entitle: props.Entitle,
          Enname: props.Enname,
          Enreason: props.Enreason,
          Enstart: props.Enstart,
          Enfinish: props.Enfinish,
          Enactive: props.Enactive,
        },
      ]);
      resolve();
    });
  };

  const dataHandler = async (props) => {
    await indexHandler(props);
  };
  const dataSender = (j) => {
    var index = data.findIndex((object) => {
      return object.id == j;
    });
    if (index !== -1) {
      return data[index];
    }
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            marginLeft: "auto",
          }}
        >
          سابقه کاری
        </div>
        <div
          className="d-flex align-items-center  "
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHasEx(!hasEx);
            setExpert([]);
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
            سابقه کاری ندارم
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

        {data.length < 1 && (
          <div
            className="ms-3"
            onClick={() => {
              dataHandler({
                id: i + 1,
                title: "",
                name: "",
                reason: "",
                start: { m: "", y: "" },
                finish: { m: "", y: "" },
                active: false,
                Entitle: "",
                Enname: "",
                Enreason: "",
                Enstart: { m: "", y: "" },
                Enfinish: { m: "", y: "" },
                Enactive: false,
              });
              setI(i + 1);
              setHasEx(true);
            }}
          >
            <ButtonAdd data={"اضافه کردن سابقه کاری"} />
          </div>
        )}
      </div>
      {data.map((item, key) => (
        <>
          <Divx
            i={item.id}
            data={dataSender(item.id)}
            dataHandler={dataHandler}
          />
        </>
      ))}
      {data.length > 0 && (
        <div
          onClick={() => {
            dataHandler({
              id: data.length + 1,
              title: "",
              name: "",
              reason: "",
              start: { m: "", y: "" },
              finish: { m: "", y: "" },
              active: false,
              Entitle: "",
              Enname: "",
              Enreason: "",
              Enstart: { m: "", y: "" },
              Enfinish: { m: "", y: "" },
              Enactive: false,
            });
            setI(data.length + 1);
            setHasEx(true);
          }}
        >
          <ButtonAdd data={"افزودن"} />
        </div>
      )}
    </>
  );
};

export default JoBExperience;
