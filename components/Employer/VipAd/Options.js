import { useContext, useEffect, useRef, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import ButtonAdd from "../FormInputs/ButtonAdd";
import ButtonTag from "../FormInputs/ButtonTag";
// import SoftExpertEn from "./SoftExpertEn";

const Options = () => {
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
  const [hasEx, setHasEx] = useState(true);
  const resumeContext = useContext(ResumeContext);

  const dropRef = useRef(null);
  useEffect(() => {
    // resumeContext.dispatch({
    //   type: "softExpert",
    //   payload: { data: expert },
    // });

    setDatas(data);
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [drop, expert]);
  useEffect(() => {
    // setExpert(resumeContext.data.softExpert);
    // if (
    //   resumeContext.data.softExpert.length > 0 ||
    //   resumeContext.data.softExpertEn.length > 0
    // )
    //   setHasEx(true);
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
  const data = [
    { id: 1, name: "اصفهان" },
    { id: 2, name: "تهران" },
    { id: 3, name: "شیراز" },
    { id: 4, name: "تبریز" },
    { id: 5, name: "قم" },
    { id: 6, name: "ملایر" },
    { id: 7, name: "زنجان" },
    { id: 8, name: "بادرود" },
    { id: 9, name: "تویسرکان" },
    { id: 10, name: "امیدیه" },
  ];
  const dropfilter = (text) => {
    let filterList = [];
    setDatas(filterList);
    data.filter(function check(item) {
      if (item.name.indexOf(text) != -1) {
        filterList.push({ id: item.id, name: item.name });
      }
    });
    if (filterList.length == 0) {
      setDrop(false);
    }
  };

  const handleExpert = () => {
    if (text == "" || text == null) {
      setInput("inputDanger");
      // } else if (level == null) {
      //   setEv("");
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
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      setHasEx(true);
      handleExpert();
    }
  };
  return (
    <>
      <div className="d-flex mb-4"></div>
      {hasEx && (
        <div className="d-flex col-12 ">
          <div className="col-12">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              تسهیلات و مزایا
            </label>

            <div className="d-flex   justify-content-between flex-wrap align-items-start expert ">
              <div className="d-inline col-12 ">
                <input
                  placeholder=""
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
                  onKeyUp={(e) => handleEnter(e)}
                />
                {/* <div
                  className="d-inline-flex"
                  onClick={() => {
                    setHasEx(true);
                    handleExpert();
                  }}
                >
                  <ButtonAdd data={"افزودن"} />
                </div> */}

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
                            setText(item.name);
                            setHasEx(true);
                            setDrop(false);
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                  <ButtonTag data={item.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Options;
