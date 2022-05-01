import { useEffect, useState } from "react";
import style from "./HomeStyles/home.module.css";
import axios from "../../axios";
import AdBoxNewEmployer from "./AdBoxNewEmployer";
import AdBoxNewEmployee from "./AdBoxNewEmployee";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";
import Filters from "./Filters";
import SideBar from "../SideBar";
import Paginate from "./Paginate";

const Adlist = () => {
  const router = useRouter();
  const [eads, setEads] = useState({});
  const [activePage, setActivePage] = useState({});
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  // const [activePage, setActivePage] = useState({});

  useEffect(() => {
    axios({
      url: "/getAdList",
      method: "get",
    })
      .then((response) => {
        console.log(response);
        setEads(response.data.data.eads);
        setTotalPage(response.data.data.meta.last_page);
        setCurrentPage(response.data.data.meta.current_page);
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
          <Paginate totalPage={totalPage} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default Adlist;
