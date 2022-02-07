import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

const Divx = ({ i, data, dataHandler }) => {
   const [localData, setLocalData] = useState({
    id: i,
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, title: e.target.value });
              datahandler({ ...localData, title: e.target.value });
            }}
            value={data.title}
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, name: e.target.value });
              datahandler({ ...localData, name: e.target.value });
            }}
            value={data.name}
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, reason: e.target.value });
              datahandler({ ...localData, reason: e.target.value });
            }}
            value={data.reason}
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
          <div className="d-flex justify-content-between flex-wrap ">
            <div className="d-flex  col-12 justify-content-start align-items-center  mb-3    pe-2">
              شروع
              <input
                className="  inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.start.m}
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
              />
              <div
                className="d-flex  align-items-center px-2 me-1"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                ماه
              </div>
              <input
                className=" inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.start.y}
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
              />
              <div
                className="d-flex align-items-center px-2"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                سال
              </div>
            </div>
            <div className="d-flex  col-12 mb-3    pe-2">
              پایان
              <input
                className="inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.finish.m}
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
              <div
                className="d-flex align-items-center px-2 me-1"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                ماه
              </div>
              <input
                className=" inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.finish.y}
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
              <div
                className="d-flex align-items-center px-2"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                سال
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

              <Image
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
        <div className="  col-8 my-3 mx-auto ">
          <img
            className="img-fluid"
            src="../../../../assets/images/line.png"
            width="100%"
          />
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Entitle: e.target.value });
              datahandler({ ...localData, Entitle: e.target.value });
            }}
            value={data.Entitle}
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Enname: e.target.value });
              datahandler({ ...localData, Enname: e.target.value });
            }}
            value={data.Enname}
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
            className="col-12 mb-3 "
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
            }}
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, Enreason: e.target.value });
              datahandler({ ...localData, Enreason: e.target.value });
            }}
            value={data.Enreason}
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
          <div className="d-flex justify-content-between flex-wrap ">
            <div
              className="d-flex  col-12 justify-content-start align-items-center  mb-3  pe-2"
              dir=""
            >
              start
              <input
                className="  inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.Enstart.m}
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
              />
              <div
                className="d-flex  align-items-center px-2 ms-2 "
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                Month
              </div>
              <input
                className=" inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.Enstart.y}
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
              />
              <div
                className="d-flex align-items-center px-2"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                year
              </div>
            </div>
            <div className="d-flex  col-12 mb-3    pe-2">
              پایان
              <input
                className="  inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.Enfinish.m}
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
              />
              <div
                className="d-flex  align-items-center px-2 ms-2 "
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                Month
              </div>
              <input
                className=" inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                value={data.Enfinish.y}
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
              />
              <div
                className="d-flex align-items-center px-2"
                style={{
                  backgroundColor: "#11999e",
                  height: "100%",
                  color: "#fff",
                  fontSize: 13,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                year
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
                <Image
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
        <div className="  col-8 my-3 mx-auto ">
          <img
            className="img-fluid"
            src="../../../../assets/images/line.png"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

const JoBExperience = () => {
  const resumeContext = useContext(ResumeContext);
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([]);
  //   {
  //     id: 1,
  //     title: "",
  //     name: "",
  //     reason: "",
  //     start: { m: "", y: "" },
  //     finish: { m: "", y: "" },
  //     active: false,
  //     Entitle: "",
  //     Enname: "",
  //     Enreason: "",
  //     Enstart: { m: "", y: "" },
  //     Enfinish: { m: "", y: "" },
  //     Enactive: false,
  //   },
  // ]);
  useEffect(() => {
    resumeContext.dispatch({
      type: "experiences",
      payload: { data: data },
    });
  }, [data]);
  const addSec = (ii) => {
    setExpert([...expert, ii]);
  };
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
          <Image
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

        {expert.length < 1 && (
          <div
            className="ms-3"
            onClick={() => {
              addSec(i + 1);
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
      {expert.map((item, key) => (
        <>
          <Divx i={item} data={dataSender(item)} dataHandler={dataHandler} />
        </>
      ))}
      {expert.length > 0 && (
        <div
          onClick={() => {
            addSec(i + 1);
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
          <ButtonAdd data={"افزودن"} />
        </div>
      )}
    </>
  );
};

export default JoBExperience;
