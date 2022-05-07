import { useEffect, useRef, useState } from "react";
import style from "./SearchStyles/search.module.css";
import { Province } from "../StaticData/City";
const TopBanner = () => {
  const [catInput, setCatInput] = useState(false);
  const [localInput, setLocalInput] = useState(false);
  const [input, setInput] = useState("inputStyle");
  const [dropdown, setDropdown] = useState("dropdown-close");
  const [drop, setDrop] = useState(false);
  const [datas, setDatas] = useState(null);
  const [text, setText] = useState(null);

  const dropRef = useRef(null);
  useEffect(() => {
    // setDatas(Langsfa);
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

  const dropfilter = (text) => {
    let filterList = [];
    setDatas(filterList);
    Province.filter(function check(item) {
      if (item.fa.indexOf(text) != -1) {
        filterList.push({ id: item.id, fa: item.fa });
      }
    });
    console.log(text);
    if (filterList.length == 0) {
      setDrop(false);
    }
  };

  console.log(drop, dropdown, text);

  return (
    <>
      <div className="top-banner1">
        <div
          className="row textshadow   "
          style={{
            color: "#fff",
            fontSize: 50,
            fontWeight: "bold",
            paddingTop: "10rem",
          }}
        >
          حرفه ای باشید!
        </div>
        <div
          style={{
            paddingRight: "20rem",
            fontSize: 30,
          }}
          className="d-flex flex-row   textshadow pt-3   "
        >
          <h2 className="d-inline-flex ms-5  text-white">
            نیاز شغلی خود را عنوان کنید{" "}
            <h2 className="d-inline-flex text-dark ms-3 fw-bold ">
              ما بر طرف می کنیم
            </h2>
          </h2>
        </div>

        <div class="d-flex flex-row col-6 intro_sec1   justify-content-between  bg-white px-3 ">
          {/* {!catInput ? (
            <div
              class=" col-6   intro2   my-3 "
              onClick={() => setCatInput(true)}
            >
              <h6 className="text-black fw-bold ps-3 pt-2 ">
                دسته شغلی یا عبارت کلیدی ...
              </h6>
              <h6 className="fs-11 text-dark ps-3 ">برنامه نویسی</h6>
            </div>
          ) : (
            <div class=" col-6   intro2 px-1 py-1  my-3 ">
              <input
                className={`  ${style.sec1} col-12 px-2  `}
                placeholder="دسته شغلی یا عبارت کلیدی"
              />
            </div>
          )} */}
          {!localInput ? (
            <>
              <div
                class=" col-4  intro2    my-3 "
                onClick={() => setLocalInput(true)}
              >
                <h6 className="text-black ps-3 pt-2 fw-bold ">
                  {" "}
                  موقعیت مکانی{" "}
                </h6>
                <h6 className="fs-11 text-dark ps-3 ">اصفهان</h6>
              </div>
            </>
          ) : (
            <div class=" col-4  intro2    my-3  ">
              {/* <input
                className={`  ${style.sec1} col-12 px-2  `}
                placeholder="موقعیت مکانی"
              /> */}
              {/* <div className="d-inline col-12 "> */}
                <input
                  placeholder="یک منطقه وارد کنید"
                  className={`col-12 ${style.sec1}`}
                  type="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setInput("inputStyle");
                    setDrop(true);
                    dropfilter(e.target.value);
                    // setDropdown("dropdown-open");
                    // setLocalInput(false)
                  }}
                />
              {/* </div> */}

              {drop === true && (
                // <div
                // className={dropdown == 'dropdown-open' ? style.dropdown_open : style.dropdown_close }
                //   ref={dropRef}>
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
                      className={` ${style.dropdown_item}`}
                      key={item.id}
                      onClick={() => {
                        setText(item.fa);
                        setDrop(false);
                        // setDropdown("close-drop");
                      }}
                    >
                      {item.fa}
                    </div>
                  ))}
                </div>
                // </div>
              )}
            </div> 
          )}
          <div class="d-flex col-1 intro3  justify-content-center align-items-center   my-3 ">
            <img src="/assets/images/magnifire2.png" height={34} width={34} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBanner;
