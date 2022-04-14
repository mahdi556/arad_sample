import { useEffect, useState } from "react";
import axios from "../../../axios";
import style from "./styles/eshow.module.css";
import Image from "next/image";
import SearchBar from "./SearchBar";
const ActiveCompanies = ({ id }) => {
  const [rads, setRads] = useState({});

  useEffect(() => {}, []);
  return (
    <>
    <SearchBar />
      <div className="   row  gx-3 gy-4  mt-5 ">
        <div className=" col-xl-4 col-xxl-3">
          <div className={`${style.activeCompany} d-flex flex-column  col-11 `}>
            <div className={`${style.activeCompany_sec6}    `}>
              <Image
                src="/assets/images/active_label.svg"
                height={129}
                width={129}
              />
            </div>
            <div className={`${style.activeCompany_sec7}    `}>
              <div className={`${style.activeCompany_sec7_1}    `}></div>
            </div>
            <div className={`${style.activeCompany_sec1}  mx-auto mt-4   `}>
              <Image
                src="/assets/images/companyLogo.png"
                height={129}
                width={129}
              />
            </div>
            <h4 className={`${style.activeCompany_sec2}    mt-2 ms-3  `}>
              چین چین
            </h4>
            <h5 className={`${style.activeCompany_sec3}    mt-1 ms-3  `}>
              مهندسی نساجی طراحی پارچه و لباس
            </h5>
            <h5 className={`${style.activeCompany_sec4}    mt-1 ms-3  `}>
              اصفهان تهران ...
            </h5>
            <div
              className={`${style.activeCompany_sec5}    mt-2 mx-auto py-1 px-5  `}
            >
              {" "}
              جزییات سازمان
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActiveCompanies;
