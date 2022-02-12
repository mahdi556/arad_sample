import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import Image from "next/image";
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
        <div className="col-12  mt-2 p-2">
          <div
            className="d-flex align-items-start p-2"
            style={{
              borderColor: "#11999e",
              borderStyle: "solid",
              borderRadius: 8,
              borderWidth: 1,
            }}
          >
            <div className="d-flex col-3 flex-column   pe-2">
              <div
                className="d-flex  "
                style={{
                  height: 250,
                  backgroundColor: "#EBEBEB",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 7,
                  width: "90%",
                }}
              >
                <img
                  className="me-2"
                  src="../../../../assets/images/upload-logo.png"
                  width="10%"
                />
                آپلود فایل
              </div>
            </div>
            <div className="d-flex col-9 ps-3   flex-wrap ">
              <div className="d-flex col-12 justify-content-between">
                <div className="d-flex flex-column col-5 text-right">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
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
                    onChange={(e) => {
                      setTilte(e.target.value);
                      datahandler(
                        i,
                        e.target.value,
                        name,
                        reason,
                        start,

                        active
                      );
                    }}
                    value={data.title}
                  />
                </div>
                <div className="d-flex flex-column col-5 text-right" dir="ltr">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    title
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

                        active
                      );
                    }}
                    value={data.title}
                  />
                </div>
              </div>
              <div className="d-flex flex-column col-12 text-right">
                <label
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  لینک
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

                      active
                    );
                  }}
                  value={data.title}
                />
              </div>
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-12 text-right">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    توضیحات
                  </label>
                  <textarea
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

                        active
                      );
                    }}
                    value={data.title}
                  />
                </div>
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

const SampleEx = () => {
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      title: "",
      Entitle:'',
       link:'',
       faDiscription:'',
       enDiscription
      },
  ]);
  const addSec = (ii) => {
    setExpert([...expert, ii]);
  };
  const [i, setI] = useState(0);
  const dataHandler = (i, title, name, reason, start, active) => {
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
            // marginBottom: "1rem",
            marginLeft: "auto",
          }}
        >
          نمونه کار
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
            نمونه کار ندارم
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

        <div
          className="ms-3"
          onClick={() => {
            addSec(i + 1);
            dataHandler(i + 1, "", "", "", "", "", false);
            setI(i + 1);
            setHasEx(true);
          }}
        >
          <ButtonAdd data={"افزودن نمونه کار"} />
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
      <div className="  col-8 my-3 mx-auto ">
        <img
          className="img-fluid"
          src="../../../../assets/images/line.png"
          width="100%"
        />
      </div>
    </>
  );
};

export default SampleEx;
