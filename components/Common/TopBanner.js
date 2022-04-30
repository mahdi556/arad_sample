import { useState } from "react";
import style from "./SearchStyles/search.module.css";

const TopBanner = () => {
  const [catInput, setCatInput] = useState(false);
  const [localInput, setLocalInput] = useState(false);
  const [input, setInput] = useState("inputStyle");
  const [dropdown, setDropdown] = useState("dropdown-close");
  const [drop, setDrop] = useState(false);
  const [datas, setDatas] = useState(null);

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

        <div class="d-flex flex-row col-6 intro_sec1   justify-content-between  bg-white px-3   ">
          {!catInput ? (
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
          )}
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
              <input
                className={`  ${style.sec1} col-12 px-2  `}
                placeholder="موقعیت مکانی"
              />
              <div className="d-inline col-12 ">
                <input
                  placeholder="یک زبان وارد کنید"
                  className={`col-12 ${input}`}
                  type="text"
                  // value={text}
                  onChange={(e) => {
                    // setText(e.target.value);
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
