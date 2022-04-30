import { useEffect, useState } from "react";
import style from "./HomeStyles/home.module.css";
import axios from "../../axios";
import AdBoxNewEmployer from "./AdBoxNewEmployer";
import AdBoxNewEmployee from "./AdBoxNewEmployee";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";
import Filters from "./Filters";
import SideBar from "../SideBar";
import Pagination from "react-js-pagination";

const Adlist = () => {
  const router = useRouter();
  const [eads, setEads] = useState({});
  const [activePage, setActivePage] = useState({});

  useEffect(() => {
    axios({
      url: "/getAdList",
      method: "get",
    })
      .then((response) => {
        console.log(response);
        setEads(response.data.data.eads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handlePageChange = (number) => {
    setActivePage(number);
  };
  const width = "50%";
  return (
    <>
      <div
        className="mx-auto"
        style={{
          maxWidth: 2300,
        }}
      >
        <div className="d-flex  justify-content-start  ">
          <div className="col-3">
            <SideBar />
          </div>
          <div
            className=" "
            style={{
              width: "60%",
            }}
          >
            <Filters />
            <div class="row  gx-3 gy-4   pe-4 pt-0 ">
              {eads.length &&
                eads.map((item, key) => (
                  <AdBoxNewEmployee
                    width={" col-xl-6 col-xxl-4 "}
                    data={item}
                    key={item.id}
                  />
                ))}
            </div>
          </div>
        </div>
        <div>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={handlePageChange()}
          />
        </div>
      </div>
    </>
  );
};

export default Adlist;
