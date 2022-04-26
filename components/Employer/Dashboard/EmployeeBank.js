import { useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import style from "./styles/rshow.module.css";
import axios from "../../../axios";
import SearchBar from "../../Employee/EShowCase/SearchBar";
import Image from "next/image";
const EmployeeBank = () => {
  const [eads, setRads] = useState({});
  const [tab, setTab] = useState(1);
  useEffect(() => {
    axios({
      url: "/getmyEmployeeAds",
      method: "post",
      data: {
        user_id: 81,
      },
    })
      .then((response) => {
        setRads(response.data.data.eads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mt-5">
        <div className="d-flex col-12 align-items-center ">
          <div className="col-10">
            <SearchBar />
          </div>
          <div
            className={`${style.filterButton} d-flex align-items-center col-2 mx-2 px-2`}
          >
            <Image src="/assets/images/arrow-down.svg" height={20} width={20} />
            <h5 className="ms-auto me-1 pt-2">فیلترها</h5>
            <div className="pt-2">
              <Image src="/assets/images/f_icon.svg" height={20} width={20} />
            </div>
          </div>
        </div>
        <div className="  mx-auto  ">
          <div className="d-flex col-12 justify-content-center mainSec bg-white mb-5 ">
            <div
              className={
                tab == 1
                  ? "col-6 py-2 rightsec jobAds-selected-top"
                  : "col-6 py-2 rightsec "
              }
              onClick={() => setTab(1)}
            >
              رزومه ها
            </div>

            <div
              className={
                tab == 2
                  ? "col-6 py-2 leftsec jobAds-selected-top"
                  : "col-6 py-2 leftsec "
              }
              onClick={() => setTab(2)}
            >
              آگهی ها{" "}
            </div>
          </div>
          {tab == 1 && eads.length
            ? eads.map(
                (item, key) =>
                  item.type == "re" && (
                    <AdBoxShowCase
                      width={" col-xl-12 col-xxl-12 "}
                      data={item}
                      key={item.id}
                    />
                  )
              )
            : tab == 2 && eads.length
            ? eads.map(
                (item, key) =>
                  item.type != "re" && (
                    <AdBoxShowCase
                      width={" col-xl-12 col-xxl-12 "}
                      data={item}
                      key={item.id}
                    />
                  )
              )
            : null}
        </div>
      </div>
    </>
  );
};
export default EmployeeBank;
