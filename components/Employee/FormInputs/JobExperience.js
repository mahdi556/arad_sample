import ButtonAdd from "../../Employer/FormInputs/ButtonAdd";
  
import { useState } from "react";

const Divx = ({ i, data, dataHandler }) => {
  const [title, setTilte] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [start, setStart] = useState({ m: "", y: "" });
  const [finish, setFinish] = useState({ m: "", y: "" });
  const [active, setActive] = useState(false);
  const datahandler = dataHandler;
  return (
    <>
      <div id={i}>
        <div className="col-12">
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
              setTilte(e.target.value);
              datahandler(
                i,
                e.target.value,
                name,
                reason,
                start,
                finish,
                active
              );
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
              setName(e.target.value);
              datahandler(
                i,
                title,
                e.target.value,
                reason,
                start,
                finish,
                active
              );
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
              setReason(e.target.value);
              datahandler(
                i,
                title,
                name,
                e.target.value,
                start,
                finish,
                active
              );
            }}
            value={data.reason}
          />
        </div>
        <div className="d-flex flex-column pt-4 col-12  ">
          <div className="col-12">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              میزان سابقه
            </label>
          </div>
          <div className="d-flex justify-content-between  ">
            <div className="d-flex  col-4 justify-content-start align-items-center  mb-3    pe-2">
              شروع
              <input
                className="  inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                onChange={(e) => {
                  setStart({ ...start, m: e.target.value });
                  datahandler(
                    i,
                    title,
                    name,
                    reason,
                    { ...start, m: e.target.value },
                    finish,
                    active
                  );
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
                onChange={(e) => {
                  setStart({ ...start, y: e.target.value });
                  datahandler(
                    i,
                    title,
                    name,
                    reason,
                    { ...start, y: e.target.value },
                    finish,
                    active
                  );
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
            <div className="d-flex  col-4  mb-3    pe-2">
              پایان
              <input
                className="inputStyle "
                type="text"
                style={{
                  width: "25%",
                }}
                onChange={(e) => {
                  setFinish({ ...finish, m: e.target.value });
                  datahandler(
                    i,
                    title,
                    name,
                    reason,
                    start,
                    {
                      ...finish,
                      m: e.target.value,
                    },
                    active
                  );
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
                onChange={(e) => {
                  setFinish({ ...finish, y: e.target.value });
                  datahandler(
                    i,
                    title,
                    name,
                    reason,
                    start,
                    {
                      ...finish,
                      y: e.target.value,
                    },
                    active
                  );
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
                datahandler(i, title, name, reason, start, finish, !active);
                setActive(!active);
              }}
            >
              <h6
                className="me-2"
                style={
                  active
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
                  active
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
    </>
  );
};

const JoBExperience = () => {
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      title: "",
      name: 1,
      reason: "",
      start: { m: "", y: "" },
      finish: { m: "", y: "" },
    },
  ]);
  const addSec = (ii) => {
    setExpert([...expert, ii]);
  };
  const [i, setI] = useState(0);
  const dataHandler = (i, title, name, reason, start, finish, active) => {
    var index = data.findIndex((object) => {
      return object.id == i;
    });
    if (index !== -1) {
      data.splice(index, 1);
    }

    setData([
      ...data,
      {
        id: i,
        title: title,
        name: name,
        reason: reason,
        start: start,
        finish: finish,
        active: active,
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

        <div
          className="ms-3"
          onClick={() => {
            addSec(i + 1);
            dataHandler(i + 1, "", "", "", "", "", false);
            setI(i + 1);
            setHasEx(true);
          }}
        >
          <ButtonAdd data={"اضافه کردن سابقه کاری"} />
        </div>
      </div>
      {expert.map((item) => (
        <>
          <Divx i={item} data={dataSender(item)} dataHandler={dataHandler} />
        </>
      ))}
      <div
        onClick={() => {
          addSec(i + 1);
          dataHandler(i + 1, "", "", "", "", "", false);
          setI(i + 1);
          setHasEx(true);
        }}
      >
        <ButtonAdd data={"افزودن"} />
      </div>
    </>
  );
};

export default JoBExperience;
