import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Ads from "../components/Common/Ads";
import axios from '../axios'
import Filters from "../components/Common/Filters";
import SideBar from "../components/SideBar";
import TopBanner from "../components/Common/TopBanner";
import SearchBar from "../components/Common/SearchBar";
import Paginate from "../components/Common/Paginate";
import AdBoxNewEmployer from "../components/Common/AdBoxNewEmployer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdBoxNewEmployee from "../components/Common/AdBoxNewEmployee";

const AdsList = () => {
  const router = useRouter();
  const [eads, setEads] = useState({});
  const [rads, setRads] = useState({});

  useEffect(() => {
    axios({
      url: "/getAds",
      method: "get",
    })
      .then((response) => {
        setEads(response.data.data.eads);
        setRads(response.data.data.rads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <SearchBar />
      <div
        className="mx-auto"
        style={{
          backgroundColor: "#f2f5f6",
        }}
      >
        <div className="d-flex col-12">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="  col-8 ">
            <Filters />
            <div class="row    gx-5 gy-4  ms-4 ps-1 ">
              {router.query.type  == 'employer' && rads.length &&
                rads.map((item, key) => (
                  <AdBoxNewEmployer
                    width={" col-xl-6 col-xxl-4 "}
                    data={item}
                    key={item.id}
                  />
                ))}
                {router.query.type == 'employee' && eads.length &&
                eads.map((item, key) => (
                  <AdBoxNewEmployee
                    width={" col-xl-6 col-xxl-4 "}
                    data={item}
                    key={item.id}
                  />
                ))}
            </div>
            <Paginate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdsList;
