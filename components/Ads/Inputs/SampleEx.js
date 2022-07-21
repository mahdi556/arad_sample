import ButtonAdd from "components/Ads/Tools/ButtonAdd";
import style from "components/Ads/FormStyles/form.module.css";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";
import AdContext from "context/Ad/AdContext";

const Divx = ({ i, data, dataHandler }) => {
  const [localData, setLocalData] = useState({
    id: data.id,
    title: data.title,
    Entitle: data.Entitle,
    link: data.link,
    faDiscription: data.faDiscription,
    enDiscription: data.enDiscription,
    file: data.file,
    fileUrl: data.fileUrl,
    ucode: data.ucode,
  });
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
      setLocalData({
        ...localData,
        file: image[0],
        ucode: image[0].lastModified,
        fileUrl: newImageUrl,
      });
      dataHandler({
        ...localData,
        fileUrl: newImageUrl,
        file: image[0],
        ucode: image[0].lastModified,
      });
    }
  }, [image]);

  return (
    <>
      <div id={i}>
        <div className="col-12 mt-2">
          <div
            className="d-flex align-items-start py-2 px-3"
            style={{
              borderColor: "#11999e",
              borderStyle: "solid",
              borderRadius: 8,
              borderWidth: 1,
            }}
          >
            <div className="d-flex col-3 flex-column   pe-2">
              {image.length > 0 ? (
                <>
                  <div
                    className="row"
                    style={{
                      height: 225,
                      backgroundColor: "#EBEBEB",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: 7,
                      width: 174,
                      fontSize: 25,
                    }}
                  >
                    {imageUrl.map((imageSrc) => (
                      <img src={imageSrc} width="5%" />
                    ))}
                    <label
                      className="d-flex mt-2 justify-content-center align-items-center "
                      htmlFor="changeImage"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="changeImage"
                        onChange={(e) => setImage(e.target.files)}
                      />
                      <img
                        className="me-2"
                        src="../../../../assets/images/upload-1.png"
                        width="10%"
                      />
                      تغییر فایل
                    </label>
                  </div>
                </>
              ) : (
                <label
                  htmlFor="imageInput"
                  className="d-flex flex-column shadow1 "
                  style={{
                    height: 225,
                    backgroundColor: "#EBEBEB",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 7,
                    // width: 174,
                    fontSize: 25,
                  }}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="imageInput"
                    onChange={(e) => setImage(e.target.files)}
                  />
                  <img
                    className="me-2"
                    src="../../../../assets/images/upload.svg"
                    width="15%"
                  />

                  <h5 className={`${style.txt1}  `}>آپلود فایل</h5>
                </label>
              )}
            </div>
            <div className="d-flex col-9 ps-3   flex-wrap ">
              <div className="d-flex col-12 justify-content-between">
                <div className="d-flex flex-column col-6 text-right">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    عنوان
                  </label>
                  <input
                    className={
                      localData.title == ""
                        ? "col-11 inputStyle"
                        : "col-11 inputFilled"
                    }
                    type="text"
                    onChange={(e) => {
                      setLocalData({ ...localData, title: e.target.value });
                      dataHandler({ ...localData, title: e.target.value });
                    }}
                    value={localData.title}
                  />
                </div>

                <div className="d-flex flex-column col-6 text-right">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    لینک
                  </label>
                  <input
                    className={
                      localData.link == ""
                        ? "col-11 inputStyle"
                        : "col-11 inputFilled"
                    }
                    type="text"
                    onChange={(e) => {
                      setLocalData({ ...localData, link: e.target.value });
                      dataHandler({ ...localData, link: e.target.value });
                    }}
                    value={localData.link}
                  />
                </div>
              </div>
              <div className="d-flex col-12">
                <div className="col-12 pe-4 mt-1">
                  <div className="d-flex flex-column col-12 text-right">
                    <label
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.2rem",
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
                      style={{
                        height: 110,
                      }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SampleEx = ({ handleStep }) => {
  const resumeContext = useContext(ResumeContext);
  const [hasEx, setHasEx] = useState(true);
  const [data, setData] = useState([]);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);

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
  useEffect(() => {
    if (stepClick) {
      {
        setStepClick(false);
        setStep(step + 1);
      }
      setStepClick(false);
    }
  }, [stepClick, step]);
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
        file: props.file,
        fileUrl: props.fileUrl,
        ucode: props.ucode,
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
    hasEx && handleStep(8);
    setHasEx(!hasEx);
  };

  return (
    <>
      <SectionLayout marginTop={false} paddingTop={false}>
        <div className="d-flex align-items-center col-12   justify-content-between">
          <SectionTitle title="نمونه کار" />
          <div className="d-flex align-items-center">
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
                handleHasEx();
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
            {/* {data.length < 1 && ( */}
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
                  file: "",
                  fileUrl: "",
                  ucode: "",
                });
                setHasEx(true);
                setI(i + 1);
              }}
            >
              <ButtonAdd data={"افزودن نمونه کار"} />
            </div>
            {/* )} */}
          </div>
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
              // addSec(data.length + 1);
              dataHandler({
                id: data.length + 1,
                title: "",
                Entitle: "",
                link: "",
                faDiscription: "",
                enDiscription: "",
                file: "",
                fileUrl: "",
                ucode: "",
              });
              setI(data.length + 1);
              setHasEx(true);
            }}
          >
            <ButtonAdd data={"افزودن"} />
          </div>
        )} */}
        <div className="  col-8 my-3 mx-auto ">
          <img
            className="img-fluid"
            src="../../../../assets/images/line.png"
            width="100%"
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default SampleEx;
