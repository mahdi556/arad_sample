import { useEffect, useRef, useState } from "react";
import style from "./SearchStyles/search.module.css";
import { Province } from "../StaticData/City";
import { JobCats } from "../StaticData/JobCategory";
import axios from "../../axios";
import SearchInputs from "./SearchInputs";
const TopBanner = () => {
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
  const [localId, setLocalId] = useState("");
  const [catId, setCatId] = useState("");

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
    axios({
      url: "/getAdList",
      method: "post",
      data: {
        local_id: localId,
        cat_id: catId,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

       <SearchInputs />
      </div>
    </>
  );
};
export default TopBanner;
