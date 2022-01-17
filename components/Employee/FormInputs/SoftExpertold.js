import { useEffect, useState } from "react";
import ButtonAdd from "./ButtonAdd";
const Divx = ({ i, removeExpertt, texthandler, tex }) => {
  const removeExpert = removeExpertt;
  // const levelhandler = levelHandler;
  const textHandler = texthandler;
  const [text, setText] = useState(tex);
  const [level, setLevel] = useState(null);
  const [ButtonX, setButtonX] = useState({ 1: false, 2: false, 3: false });
  const handleClass = (level, i) => {
    setButtonX({ ...ButtonX, 1: false, 2: false, 3: false });
    ButtonX[1] = false;
    ButtonX[2] = false;
    ButtonX[3] = false;
    setButtonX({ ...ButtonX, [level]: true });
    // levelhandler(level, i);
  };
  return (
    <div
      className="d-flex mb-3 justify-content-between align-items-end expert "
      id={i}
    >
      <div className="d-inline col-6 ">
        <input
          className="col-9 inputStyle"
          type="text"
          value={tex}
          onChange={(e) => {
            setText(e.target.value);
            textHandler(e.target.value, i, level);
          }}
        />
        <div
          className="delete-expert"
          onClick={(e) => {
            removeExpert(i);
          }}
        >
          حذف
        </div>
        {/* <div onClick={(e) => console.log(document.getElementById(i).id)}>
          {i}-{tex}
        </div> */}
      </div>
      <div className="d-inline col-6  offset-1">
        <div
          className={ButtonX[1] ? "ButtonXChecked" : "ButtonX"}
          onClick={() => {
            handleClass(1, i);
            setLevel(1);
            textHandler(tex, i, 1);
          }}
        >
          مقدماتی
        </div>
        <div
          className={ButtonX[2] ? "ButtonXChecked" : "ButtonX"}
          onClick={() => {
            handleClass(2, i);
            setLevel(2);
            textHandler(tex, i, 2);
          }}
        >
          متوسط
        </div>
        <div
          className={ButtonX[3] ? "ButtonXChecked" : "ButtonX"}
          onClick={() => {
            handleClass(3, i);
            setLevel(3);
            textHandler(tex, i, 3);
          }}
        >
          پیشرفته
        </div>
      </div>
    </div>
  );
};
const SoftExpert = ({ name }) => {
  const [expert, setExpert] = useState([1]);
  const [i, setI] = useState(1);
  const [otext, setOText] = useState({ 1: "one" });
  const [text, setText] = useState([{ id: 1, text: "one", level: 1 }]);

  const addSec = (ii) => {
    setExpert([...expert, ii]);
  };
  const texthandler = (tex, j, level) => {
    var index = text.findIndex((object) => {
      return object.id == j;
    });
    if (index !== -1) {
      text.splice(index, 1);
    }
    setText([...text, { id: j, text: tex, level: level }]);
    setOText({ ...otext, [j]: tex });
  };

  const removeExpert = (i) => {
    var index = expert.indexOf(i);
    expert.splice(index, 1);
    setExpert([...expert]);

    var index1 = text.findIndex((object) => {
      return object.id == i;
    });
    if (index1 !== -1) {
      text.splice(index1, 1);
    }
    setText([...text]);
  };
  return (
    <>
      <label
        style={{
          marginBottom: "0.5rem",
          fontSize: "1rem",
        }}
      >
        {name}
      </label>
      {expert.map((item) => (
        <>
          <Divx
            i={item}
            tex={otext[item]}
            removeExpertt={removeExpert}
            texthandler={texthandler}
          />
        </>
      ))}

      <div
        onClick={() => {
          addSec(i + 1);
          setI(i + 1);
        }}
      >
        <ButtonAdd data={"افزودن"} />
      </div>
      {/* 
      {text.map((item, key) => (
        <div>
          id:{item.id} ---- text:{item.text}--- level:{item.level}---
        </div>
      ))} */}
    </>
  );
};

export default SoftExpert;
