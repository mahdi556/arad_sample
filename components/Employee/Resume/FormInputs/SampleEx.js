import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
  
import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

const Divx = ({ i, data, dataHandler }) => {
  const [localData, setLocalData] = useState({
    id: data.id,
    title: data.title,
    Entitle: data.Entitle,
    link: data.link,
    faDiscription: data.faDiscription,
    enDiscription: data.enDiscription,
  });
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
                    className={
                      localData.title == ""
                        ? "col-12 inputStyle"
                        : "col-12 inputFilled"
                    }
                    type="text"
                    onChange={(e) => {
                      setLocalData({ ...localData, title: e.target.value });
                      dataHandler({ ...localData, title: e.target.value });
                    }}
                    value={localData.title}
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
                    className={
                      localData.Entitle == ""
                        ? "col-12 inputStyle"
                        : "col-12 inputFilled"
                    }
                    type="text"
                    onChange={(e) => {
                      setLocalData({ ...localData, Entitle: e.target.value });
                      dataHandler({ ...localData, Entitle: e.target.value });
                    }}
                    value={localData.Entitle}
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
                  className={
                    localData.link == ""
                      ? "col-12 inputStyle"
                      : "col-12 inputFilled"
                  }
                  type="text"
                  onChange={(e) => {
                    setLocalData({ ...localData, link: e.target.value });
                    dataHandler({ ...localData, link: e.target.value });
                  }}
                  value={localData.link}
                />
              </div>
              <div className="d-flex col-12">
                <div className="col-6 pe-4">
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
                      className={
                        localData.faDiscription == ""
                          ? "col-12 inputStyle"
                          : "col-12 inputFilled"
                      }
                      type="text"
                      onChange={(e) => {
                        setLocalData({
                          ...localData,
                          faDiscription: e.target.value,
                        });
                        dataHandler({
                          ...localData,
                          faDiscription: e.target.value,
                        });
                      }}
                      value={localData.faDiscription}
                    />
                  </div>
                </div>
                <div className="col-6 ps-4" dir="ltr">
                  <div className="d-flex flex-column col-12 text-right">
                    <label
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      Description
                    </label>
                    <textarea
                      className={
                        localData.enDiscription == ""
                          ? "col-12 inputStyle"
                          : "col-12 inputFilled"
                      }
                      type="text"
                      onChange={(e) => {
                        setLocalData({
                          ...localData,
                          enDiscription: e.target.value,
                        });
                        dataHandler({
                          ...localData,
                          enDiscription: e.target.value,
                        });
                      }}
                      value={localData.enDiscription}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SampleEx = () => {
  const resumeContext = useContext(ResumeContext);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState(resumeContext.data.sampleEx);
   
  const [i, setI] = useState(0);

  const regData = () => {
    return new Promise((resolve, reject) => {
      setData(resumeContext.data.sampleEx);
      if (data.length > 0) {
        resolve();
      }
    });
  };

  useEffect(() => {
    if (data.length > 0) {
      resumeContext.dispatch({
        type: "sampleEx",
        payload: { data: data },
      });
    }
  }, [data]);
  useEffect(async () => {
    await regData();
    setI(data.length);
  }, []);
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
        Entitle: props.Entitle,
        link: props.link,
        faDiscription: props.faDiscription,
        enDiscription: props.enDiscription,
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
            resumeContext.dispatch({
              type: "sampleEx",
              payload: { data: [] },
            });
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
                Entitle: "",
                faDiscription: "",
                enDiscription: "",
                link: "",
              });
              setHasEx(true);
              setI(i + 1);
            }}
          >
            <ButtonAdd data={"افزودن نمونه کار"} />
          </div>
        )}
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
      {data.length > 0 && (
        <div
          onClick={() => {
            // addSec(data.length + 1);
            dataHandler({
              id: data.length + 1,
              title: "",
              Entitle: "",
              link: "",
              faDiscription: "",
              enDiscription: "",
            });
            setI(data.length + 1);
            setHasEx(true);
          }}
        >
          <ButtonAdd data={"افزودن"} />
        </div>
      )}
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
