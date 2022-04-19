import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import ButtonTag from "../../FormInputs/ButtonTag";
import SoftExpertEn from "./SoftExpertEn";
import { Softs } from "../../../StaticData/SalaryType";
const SoftExpert = () => {
  const [dropdown, setDropdown] = useState("dropdown-close");
  const [drop, setDrop] = useState(false);

  const [ButtonX, setButtonX] = useState({ 1: false, 2: false, 3: false });
  const [i, setI] = useState(1);
  const [text, setText] = useState(null);
  const [level, setLevel] = useState(null);
  const [expert, setExpert] = useState([]);
  const [ev, setEv] = useState("none");
  const [input, setInput] = useState("inputStyle");
  const [datas, setDatas] = useState(null);
  const [hasEx, setHasEx] = useState(false);
  const resumeContext = useContext(ResumeContext);

  const dropRef = useRef(null);
  useEffect(() => {
    resumeContext.dispatch({
      type: "softExpert",
      payload: { data: expert },
    });

    setDatas(Softs);
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [drop, expert]);
  useEffect(() => {
    setExpert(resumeContext.data.softExpert);
    if (
      resumeContext.data.softExpert.length > 0 ||
      resumeContext.data.softExpertEn.length > 0
    )
      setHasEx(true);
  }, []);
  const handleClickOutside = (event) => {
    if (
      dropRef.current &&
      !dropRef.current.contains(event.target) &&
      drop == true
    ) {
      setDropdown("close-drop");
      setDrop(false);
    }
  };

  const handleClass = (j) => {
    ButtonX[1] = false;
    ButtonX[2] = false;
    ButtonX[3] = false;

    setButtonX({ ...ButtonX, [j]: true });
  };
   const dropfilter = (text) => {
    let filterList = [];
    setDatas(filterList);
    Softs.filter(function check(item) {
      if (item.fa.indexOf(text) != -1) {
        filterList.push({ id: item.id, fa: item.fa });
      }
    });
    if (filterList.length == 0) {
      setDrop(false);
    }
  };

  const handleExpert = () => {
    if (text == "" || text == null) {
      setInput("inputDanger");
    } else if (level == null) {
      setEv("");
    } else {
      setExpert([...expert, { id: i, text: text, level: level }]);
      setText(""), setLevel(null);
      ButtonX[1] = false;
      ButtonX[2] = false;
      ButtonX[3] = false;
      setButtonX({ ...ButtonX });
      setI(i + 1);
    }
  };
  const removeExpert = (i) => {
    var index1 = expert.findIndex((object) => {
      return object.id == i;
    });
    if (index1 !== -1) {
      expert.splice(index1, 1);
    }
    setExpert([...expert]);
    setText(null);
  };

  return (
    <>
      <div className="d-flex mb-4">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            // marginBottom: "1rem",
            marginLeft: "auto",
          }}
        >
          مهارت های نرم افزاری
        </div>
        <div
          className="d-flex align-items-center  "
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHasEx(!hasEx);
            setExpert([]);
            // setData([]);
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
            مهارت نرم افزاری ندارم
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
        {!hasEx && (
          <div
            className="ms-3"
            onClick={() => {
              setHasEx(true);
            }}
          >
            <ButtonAdd data={"افزودن"} />
          </div>
        )}
      </div>
      {hasEx && (
        <div className="d-flex col-12 ">
          <div className="col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              نام مهارت
            </label>

            <div className="d-flex   justify-content-between flex-wrap align-items-start expert ">
              <div className="d-inline col-12 ">
                <input
                  placeholder="یک مهارت وارد کنید"
                  className={`col-12 ${input}`}
                  type="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setInput("inputStyle");
                    setDrop(true);
                    dropfilter(e.target.value);
                    setDropdown("dropdown-open");
                  }}
                />

                {drop == true && (
                  <div className={dropdown} ref={dropRef}>
                    <div
                      style={{
                        maxHeight: "8rem",
                        width: "100%",
                        overflowY: "scroll",
                        paddingRight: "0.8rem",
                        paddingLeft: "0.8rem",
                      }}
                    >
                      {datas.map((item, key) => (
                        <div
                          className="  dropdown-item"
                          key={item.id}
                          onClick={() => {
                            setText(item.fa);
                            setDropdown("close-drop");
                            setDrop(false);
                          }}
                        >
                          {item.fa}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between col-12 mt-3">
                <div
                  className={ButtonX[1] ? "ButtonXChecked" : "ButtonX"}
                  onClick={() => {
                    setLevel({ id: 1, name: "مقدماتی" });
                    handleClass(1);
                    setEv("none");
                  }}
                >
                  مقدماتی
                </div>
                <div
                  className={ButtonX[2] ? "ButtonXChecked" : "ButtonX"}
                  onClick={() => {
                    setLevel({ id: 2, name: "متوسط" });
                    handleClass(2);
                    setEv("none");
                  }}
                >
                  متوسط
                </div>
                <div
                  className={ButtonX[3] ? "ButtonXChecked" : "ButtonX"}
                  onClick={() => {
                    setLevel({ id: 3, name: "پیشرفته" });
                    handleClass(3);
                    setEv("none");
                  }}
                >
                  پیشرفته
                </div>
              </div>
              <div
                style={{
                  color: "#ec4b72",
                  fontSize: 15,
                  marginTop: 5,
                  display: ev,
                }}
              >
                سطح مهارت را انتخاب کنید
              </div>
            </div>
            <div className="d-flex my-2 flex-wrap">
              {expert.map((item, key) => (
                <div onClick={() => removeExpert(item.id)}>
                  <ButtonTag data={item.text + " : " + item.level.name} />
                </div>
              ))}
            </div>

            {hasEx && (
              <div
                onClick={() => {
                  setHasEx(true);
                  handleExpert();
                }}
              >
                <ButtonAdd data={"افزودن"} />
              </div>
            )}
          </div>
          <SoftExpertEn />
        </div>
      )}
    </>
  );
};

export default SoftExpert;
