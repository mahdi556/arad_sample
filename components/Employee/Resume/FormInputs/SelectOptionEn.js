import { useEffect, useRef, useState } from "react";

const SelectOptionEn = ({ data, name, valueHandler,predata }) => {
  const [dropLabel, setDropLabel] = useState("dropLabelBack");
  const [Placeholder, setPlaceholder] = useState(predata);
  const [dropdown, setDropdown] = useState("dropdown-close");
  const [drop, setDrop] = useState(false);
  const [search, setSearch] = useState(false);
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
      setDropLabel("dropLabelBack");
      delay(300).then(() => setDrop(false));
    }
  };
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const dropfilter = (text) => {
    let filterList = [];
    setDatas(filterList);
    data.filter(function check(item) {
      if (item.name.indexOf(text) != -1) {
        filterList.push({ id: item.id, name: item.name });
      }
    });
  };

  return (
    <div className="d-flex  py-4 "  ref={dropRef}>
      <div className="col-12 ">
        <label
          className={dropLabel}
          style={{
            marginBottom: "0.5rem",
                    
          }}
        >
          {name}
        </label>
        {drop == false && (
          <div
            className="dropdown-close"
            onClick={() => {
              setDrop(true);
              setDropdown("dropdown-open  ");
              setDropLabel("dropLabelEn");
            }}
          >
            <div className="ps-2  "  >{Placeholder}</div>
            <div className=" arrowEn">
              <img
                className="img-fluid  "
                src= "../../../../assets/images/arrow-down.png" 
                width="80%"
              />
            </div>
          </div>
        )}
        {drop == true && (
          <div className={dropdown}>
            <div
              className="d-flex ps-2 py-1  "
              onClick={() => {
                setDropdown("close-drop");
                setDropLabel("dropLabelBack");
                delay(300).then(() => setDrop(false));
              }}
            >
              <div className="drop-arrowEn">
                <img
                  className="img-fluid  "
                  src= "../../../../assets/images/arrow-down.png" 
                  width="80%"
                />
              </div>
            </div>
            <div
              style={{
                maxHeight: "8rem",
                width: "100%",
                overflowY: "scroll",
                paddingRight: "0.8rem",
                paddingLeft: "0.8rem",
              }}
            >
              <div
                className="d-flex  px-2 py-1 "
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "rgba(17,153,158,0.32)",
                  color: "#000",
                  borderRadius: "0.3rem",
                }}
              >
                <div
                  className=" "
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <img
                    className="  img-fluid "
                    src=  "../../../../assets/images/magnifire.png" 
                    width={12}
                    style={{ marginRight: "0.5rem" }}
                  />
                  {search || "search"}
                </div>

                {search && (
                  <input
                    className="  col-11 me-auto ms-2 ps-2 searchInput "
                    placeholder="Search something ..."
                  
                    type="text "
                    onChange={(e) => dropfilter(e.target.value)}
                  />
                )}
              </div>
              {datas.map((item, key) => (
                <div
                  className="  dropdown-item"
                  key={item.id}
                  onClick={() => {
                    valueHandler(item.id, item.en);
                    setPlaceholder(item.en);
                    setDropdown("close-drop");
                    setDropLabel("dropLabelBack");
                    setSearch(false);
                    delay(300).then(() => setDrop(false));
                  }}
                >
                  {item.en}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectOptionEn;
