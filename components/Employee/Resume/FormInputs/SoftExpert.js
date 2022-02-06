import { useEffect, useRef, useState } from "react";
import ButtonAdd from "../../../Employer/FormInputs/ButtonAdd";
import ButtonTag from "../../FormInputs/ButtonTag";

const SoftExpert = ({ name }) => {
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
  const dropRef = useRef(null);
  useEffect(() => {
    setDatas(data);
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [drop]);
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
    <div className="d-flex col-12 ">
    <div className="col-5">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          {name}
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
        </div>
        <div className="d-flex my-2 flex-wrap">
          {expert.map((item, key) => (
            <div onClick={() => removeExpert(item.id)}>
              <ButtonTag data={item.text + " : " + item.level.name} />
            </div>
          ))}
        </div>
        <div onClick={() => handleExpert()}>
          <ButtonAdd data={"افزودن"} />
        </div>
      </div>
      <div className="col-5 offset-2" dir="ltr">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          {name}
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
                setLevel({ id: 1, name: "مقدماتی" });
                handleClass(1);
                setEv("none");
              }}
            >
              Introductory
            </div>
            <div
              className={ButtonX[2] ? "ButtonXChecked" : "ButtonX"}
              onClick={() => {
                setLevel({ id: 2, name: "متوسط" });
                handleClass(2);
                setEv("none");
              }}
            >
              Medium
            </div>
            <div
              className={ButtonX[3] ? "ButtonXChecked" : "ButtonX"}
              onClick={() => {
                setLevel({ id: 3, name: "پیشرفته" });
                handleClass(3);
                setEv("none");
              }}
            >
              Advanced
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
        </div>
        <div className="d-flex my-2 flex-wrap">
          {expert.map((item, key) => (
            <div onClick={() => removeExpert(item.id)}>
              <ButtonTag data={item.text + " : " + item.level.name} />
            </div>
          ))}
        </div>
        <div onClick={() => handleExpert()}>
          <ButtonAdd data={"افزودن"} />
        </div>
      </div>
    </div>
     
    

    
      <div className="d-flex my-2 flex-wrap">
        {expert.map((item, key) => (
          <div onClick={() => removeExpert(item.id)}>
            <ButtonTag data={item.text + " : " + item.level.name} />
          </div>
        ))}
      </div>
     
    </>
  );
};

export default SoftExpert;
