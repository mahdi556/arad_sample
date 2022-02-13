import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import Image from "next/image";
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
  const datahandler = dataHandler;
  console.log(i, data);
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
                      setLocalData({ ...localData, title: e.target.value });
                      datahandler({ ...localData, title: e.target.value });
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
                  className="col-12 mb-3 "
                  style={{
                    backgroundColor: "#EBEBEB",
                    borderStyle: "none",
                    borderRadius: 5,
                  }}
                  type="text"
                  onChange={(e) => {
                    setLocalData({ ...localData, link: e.target.value });
                    datahandler({ ...localData, link: e.target.value });
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
                      className="col-12 mb-3 "
                      style={{
                        backgroundColor: "#EBEBEB",
                        borderStyle: "none",
                        borderRadius: 5,
                      }}
                      type="text"
                      onChange={(e) => {
                        setLocalData({
                          ...localData,
                          faDiscription: e.target.value,
                        });
                        datahandler({
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
                      className="col-12 mb-3 "
                      style={{
                        backgroundColor: "#EBEBEB",
                        borderStyle: "none",
                        borderRadius: 5,
                      }}
                      type="text"
                      onChange={(e) => {
                        setLocalData({
                          ...localData,
                          enDiscription: e.target.value,
                        });
                        datahandler({
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
  const resumeContext = useContext(ResumeContext);
  const [expert, setExpert] = useState([]);
  const [hasEx, setHasEx] = useState(false);
  const [data, setData] = useState([]);
  const addSec = (ii) => {
    setExpert([...expert, { id: ii }]);
  };
  const [i, setI] = useState(0);
  useEffect(() => {
    resumeContext.dispatch({
      type: "sampleEx",
      payload: { data: data },
    });
  }, [data]);
  useEffect(() => {
    setData(resumeContext.data.sampleEx);
    setI(resumeContext.data.sampleEx.length);
    setExpert(resumeContext.data.sampleEx);
  }, []);

  const dataHandler = (props) => {
    console.log(resumeContext.data.sampleEx, "expert1");
    var index = data.findIndex((object) => {
      return object.id == props.id;
    });
    if (index !== -1) {
      data.splice(index, 1);
    }
    console.log(resumeContext.data.sampleEx, "expert2");

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
    console.log(resumeContext.data.sampleEx, "expert3");
  };
  console.log(resumeContext.data.sampleEx);
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
        {expert.length < 1 && (
          <div
            className="ms-3"
            onClick={() => {
              addSec(i + 1);
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
      {expert.map((item) => (
        <>
          <Divx
            i={item.id}
            data={dataSender(item.id)}
            dataHandler={dataHandler}
          />
        </>
      ))}
      {expert.length > 0 && (
        <div
          onClick={() => {
            addSec(i + 1);
            dataHandler({
              id: i + 1,
              title: "",
              Entitle: "",
              link: "",
              faDiscription: "",
              enDiscription: "",
            });
            setI(i + 1);
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
