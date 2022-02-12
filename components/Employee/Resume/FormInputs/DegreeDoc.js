import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

const Divx = ({ i, data, dataHandler }) => {
  const [localData, setLocalData] = useState({
    id: i,
    title: "",
    degree: "",
    date: { d: "", m: "", y: "" },
    active: false,
    Entitle: "",
    Endegree: "",
    Endate: { d: "", m: "", y: "" },
    Enactive: false,
  });
  const datahandler = dataHandler;
  return (
    <>
      <div className="d-flex col-12 px-3 mt-3 " id={i}>
        <div className="col-6 pe-3">
          <div className="col-12  mt-2">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              آخرین مدرک تحصیلی
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
              رشته تحصیلی
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
                setLocalData({ ...localData, degree: e.target.value });
                datahandler({ ...localData, degree: e.target.value });
              }}
              value={data.degree}
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
            <div className="d-flex justify-content-start  ">
              <div className="d-flex  col-12 justify-content-start align-items-center  mb-3   me-2 pe-2">
                <input
                  className="  inputStyle "
                  type="text"
                  style={{
                    width: "25%",
                  }}
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
                />
                <div
                  className="d-flex  align-items-center px-2 me-3"
                  style={{
                    backgroundColor: "#11999e",
                    height: "100%",
                    color: "#fff",
                    fontSize: 13,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                >
                  روز
                </div>
                <input
                  className="  inputStyle "
                  type="text"
                  style={{
                    width: "25%",
                  }}
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
                />
                <div
                  className="d-flex  align-items-center px-2   me-3"
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
                />
                <div
                  className="d-flex align-items-center px-2 "
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
            </div>

            <div
              className="d-flex align-items-center mt-2"
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
                مشغول به تحصیل هستم
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
        <div id={i} className="col-6 ps-3 " dir="ltr">
          <div className="col-12  mt-2">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              Last educational certificate
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
              Field Of Study
            </label>
            <input
              className="col-12 mb-3 "
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
              type="text"
              onChange={(e) => {
                setLocalData({ ...localData, Endegree: e.target.value });
                datahandler({ ...localData, Endegree: e.target.value });
              }}
              value={data.Endegree}
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
                Years of graduation
              </label>
            </div>
            <div className="d-flex justify-content-start  ">
              <div className="d-flex  col-12 justify-content-start align-items-center  mb-3   ">
                <input
                  className="  inputStyle "
                  type="text"
                  style={{
                    width: "25%",
                  }}
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Endate: { ...localData.Endate, d: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Endate: { ...localData.Endate, d: e.target.value },
                    });
                  }}
                />
                <div
                  className="d-flex  align-items-center px-2 ms-3 "
                  style={{
                    backgroundColor: "#11999e",
                    height: "100%",
                    color: "#fff",
                    fontSize: 13,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                >
                  Day
                </div>
                <input
                  className=" inputStyle "
                  type="text"
                  style={{
                    width: "25%",
                  }}
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Endate: { ...localData.Endate, m: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Endate: { ...localData.Endate, m: e.target.value },
                    });
                  }}
                />
                <div
                  className="d-flex  align-items-center px-2 ms-3 "
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
                  className="  inputStyle "
                  type="text"
                  style={{
                    width: "25%",
                  }}
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      Endate: { ...localData.Endate, y: e.target.value },
                    });
                    datahandler({
                      ...localData,
                      Endate: { ...localData.Endate, y: e.target.value },
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
                  Year
                </div>
              </div>
            </div>

            <div
              className="d-flex align-items-center mt-2"
              onClick={() => {
                setLocalData({ ...localData, Enactive: !localData.Enactive });
                datahandler({ ...localData, Enactive: !localData.Enactive });
              }}
            >
              <h6
                className="ms-2 "
                style={
                  localData.Enactive
                    ? {
                        color: "#e92b59",
                        fontSize: 16,
                      }
                    : { color: "#11999e", fontSize: 16 }
                }
              >
                I am studying
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
      </div>
    </>
  );
};

const DegreeDoc = () => {
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([]);
  const resumeContext=useContext(ResumeContext);
  useEffect(() => {
    resumeContext.dispatch({
      type: "degree",
      payload: { data: data },
    });
  }, [data]);
  const addSec = (ii) => {
    setExpert([...expert, ii]);
  };
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
  return (
    <>
      <div className="d-flex align-items-center">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            // marginBottom: "1rem",
            marginLeft: "auto",
          }}
        >
          مدرک تحصیلی
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
            مدرک تحصیلی ندارم
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
                  degree: "",
                  date: { d: "", m: "", y: "" },
                  active: false,
                  Entitle: "",
                  degree: "",
                  Endate: { d: "", m: "", y: "" },
                  Enactive: false,
                });
                setI(i + 1);
                setHasEx(true);
              }}
            >
              <ButtonAdd data={"افزودن مدرک تحصیلی"} />
            </div>
          )}
        </div>
       {expert.map((item) => (
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
              degree: "",
              date: { d: "", m: "", y: "" },
              active: false,
              Entitle: "",
              degree: "",
              Endate: { d: "", m: "", y: "" },
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

export default DegreeDoc;
