import { useEffect, useState } from "react";
import axios from "../../../axios";
import style from "./styles/eshow.module.css";
import Image from "next/image";
import AdBoxNewEmployer from "../../Common/AdBoxNewEmployer";
import SearchBar from "./SearchBar";
const VipAds = ({ id }) => {
  const [rads, setRads] = useState({});

  useEffect(() => {
    axios({
      url: "/getAds",
      method: "get",
    })
      .then((response) => {
        // setEads(response.data.data.eads);
        setRads(response.data.data.rads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
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
      <div class="row   mt-3 gx-3 gy-4   ps-1 ">
        {rads.length &&
          rads.map((item, key) => (
            <AdBoxNewEmployer
              width={" col-xl-6 col-xxl-4 "}
              data={item}
              key={item.id}
            />
          ))}
      </div>
    </>
  );
};
export default VipAds;
