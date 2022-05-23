import { useEffect, useRef, useState } from "react";
import style from "./SearchStyles/search.module.css";
import { Province } from "../StaticData/City";
import { JobCats } from "../StaticData/JobCategory";
import axios from "../../axios";
import { useRouter } from "next/router";


const SearchInputs =()=>{
    const [catInput, setCatInput] = useState(false);
    const [localInput, setLocalInput] = useState(false);
    const [input1, setInput1] = useState("inputStyle");
    const [dropdown1, setDropdown1] = useState("dropdown-close");
    const [drop1, setDrop1] = useState(false);
    const [datas1, setDatas1] = useState(null);
    const [cat, setCat] = useState(null);
    const [input2, setInput2] = useState("inputStyle");
    const [dropdown2, setDropdown2] = useState("dropdown-close");
    const [drop2, setDrop2] = useState(false);
    const [datas2, setDatas2] = useState(null);
    const [local, setLocal] = useState(null);
    const [localId, setLocalId] = useState(0);
    const [catId, setCatId] = useState(0);
     const router=useRouter()  
    const dropRef = useRef(null);
    useEffect(() => {
      // setDatas(Langsfa);
      document.addEventListener("click", handleClickOutside, false);
      return () => {
        document.removeEventListener("click", handleClickOutside, false);
      };
    }, [drop1]);
    useEffect(() => {
      // setDatas(Langsfa);
      document.addEventListener("click", handleClickOutside2, false);
      return () => {
        document.removeEventListener("click", handleClickOutside2, false);
      };
    }, [drop2]);
    const handleClickOutside = (event) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(event.target) &&
        drop2 == true
      ) {
        setDropdown1("close-drop");
        setDrop1(false);
      }
    };
    const handleClickOutside2 = (event) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(event.target) &&
        drop2 == true
      ) {
        setDropdown2("close-drop");
        setDrop2(false);
      }
    };
    const dropfilter = (text) => {
      let filterList1 = [];
      setDatas2(filterList1);
      Province.filter(function check(item) {
        if (item.fa.indexOf(text) != -1) {
          filterList1.push({ id: item.id, fa: item.fa });
        }
      });
      if (filterList1.length == 0) {
        setDrop1(false);
      }
    };
    const jobfilter = (text) => {
      let filterList2 = [];
      setDatas1(filterList2);
      JobCats.filter(function check(item) {
        if (item.fa.indexOf(text) != -1) {
          filterList2.push({ id: item.id, fa: item.fa });
        }
      });
      if (filterList2.length == 0) {
        setDrop2(false);
      }
    };
    const searchHandle = () => {
        router.push({
            pathname: "/eadslist", query: { localId: localId,cat:catId },
          })
     
    };
  
  
    return(
        <>
         <div
          class="d-flex flex-row col-6 intro_sec1   justify-content-between  bg-white px-3 "
          style={{
            height: 90,
          }}
        >
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
            <div class=" col-4  intro2    my-3  ">
              {/* <input
              className={`  ${style.sec1} col-12 px-2  `}
              placeholder="موقعیت مکانی"
            /> */}
              {/* <div className="d-inline col-12 "> */}
              <input
                placeholder="دسته شغلی وارد کنید"
                className={`col-12 ${style.sec1} mt-2 ms-3`}
                type="text"
                value={cat}
                onChange={(e) => {
                  setCat(e.target.value);
                  setInput1("inputStyle");
                  setDrop1(true);
                  jobfilter(e.target.value);
                  setDropdown1("dropdown-open");
                  // setLocalInput(false)
                }}
              />
              {/* </div> */}

              {drop1 === true && (
                <div
                  className={
                    dropdown1 == "dropdown-open"
                      ? style.dropdown_open
                      : style.dropdown_close
                  }
                  ref={dropRef}
                >
                  <div
                    style={{
                      maxHeight: "10rem",
                      width: "100%",
                      overflowY: "scroll",
                      paddingRight: "0.8rem",
                      paddingLeft: "0.8rem",
                      scrollbarColor: "#ec4b72 #fff",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {datas1.map((item, key) => (
                      <div
                        className={` ${style.dropdown_item}`}
                        key={item.id}
                        onClick={() => {
                          setCat(item.fa);
                          setCatId(item.id);
                          setDrop1(false);
                          setDropdown1("close-drop");
                        }}
                      >
                        {item.fa}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {!catInput ? (
            <>
              <div
                class=" col-4  intro2    my-3 "
                onClick={() => setCatInput(true)}
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
                className={`col-12 ${style.sec1} mt-2 ms-3`}
                type="text"
                value={local}
                onChange={(e) => {
                  setLocal(e.target.value);
                  setInput2("inputStyle");
                  setDrop2(true);
                  dropfilter(e.target.value);
                  setDropdown2("dropdown-open");
                  // setLocalInput(false)
                }}
              />
              {/* </div> */}

              {drop2 === true && (
                <div
                  className={
                    dropdown2 == "dropdown-open"
                      ? style.dropdown_open
                      : style.dropdown_close
                  }
                  ref={dropRef}
                >
                  <div
                    style={{
                      maxHeight: "10rem",
                      width: "100%",
                      overflowY: "scroll",
                      paddingRight: "0.8rem",
                      paddingLeft: "0.8rem",
                      scrollbarColor: "#ec4b72 #fff",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {datas2.map((item, key) => (
                      <div
                        className={` ${style.dropdown_item}`}
                        key={item.id}
                        onClick={() => {
                          setLocal(item.fa);
                          setLocalId(item.id);
                          setDrop2(false);
                          setDropdown2("close-drop");
                        }}
                      >
                        {item.fa}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <div
            class="d-flex col-1 intro3  justify-content-center align-items-center   my-3 "
            onClick={() => searchHandle()}
          >
            <img src="/assets/images/magnifire2.png" height={34} width={34} />
          </div>
        </div>
        </>
    )
}
export default SearchInputs