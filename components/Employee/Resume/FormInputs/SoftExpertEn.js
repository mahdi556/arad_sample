  
import { useContext, useEffect, useRef, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import ButtonTag from "../../FormInputs/ButtonTag";
import { Softs } from "../../../StaticData/SalaryType";
const SoftExpertEn = () => {
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
      type: "softExpertEn",
      payload: { data: expert },
    });

    setDatas(Softs);
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [drop, expert]);
  useEffect(() => {
    setExpert(resumeContext.data.softExpertEn);
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
      if (item.en.indexOf(text) != -1) {
        filterList.push({ id: item.id, name: item.en });
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
      <div className="col-5 offset-2" dir="ltr">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          Software name
        </label>

        <div className="d-flex   justify-content-between flex-wrap align-items-start expert ">
          <div className="d-inline col-12 ">
            <input
              placeholder="Type a software"
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
                        setText(item.name);
                        setDropdown("close-drop");
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
          <div className="d-flex justify-content-between col-12 mt-3" dir="ltr">
            <div
              className={ButtonX[1] ? "ButtonXChecked me-0" : "ButtonX me-0"}
              onClick={() => {
                setLevel({ id: 1, name: "Introductory" });
                handleClass(1);
                setEv("none");
              }}
            >
              Introductory
            </div>
            <div
              className={ButtonX[2] ? "ButtonXChecked" : "ButtonX"}
              onClick={() => {
                setLevel({ id: 2, name: "Medium" });
                handleClass(2);
                setEv("none");
              }}
            >
              Medium
            </div>
            <div
              className={ButtonX[3] ? "ButtonXChecked" : "ButtonX"}
              onClick={() => {
                setLevel({ id: 3, name: "Advanced" });
                handleClass(3);
                setEv("none");
              }}
            >
              Advanced
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
            Choose Level !
          </div>
        </div>
        <div className="d-flex my-2 flex-wrap">
          {expert.map((item, key) => (
            <div onClick={() => removeExpert(item.id)}>
              <ButtonTag data={item.text + " : " + item.level.name} />
            </div>
          ))}
        </div>

        <div
          onClick={() => {
            setHasEx(true);
            handleExpert();
          }}
        >
          <ButtonAdd data={"Add"} />
        </div>
      </div>
    </>
  );
};

export default SoftExpertEn;
