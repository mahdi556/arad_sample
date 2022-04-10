import EShowContent from "../components/Employee/EShowCase/EShowContent";
import EShowSideBar from "../components/Employee/EShowCase/EShowSideBar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from '../axios';

const EShowCase = () => {
  const router = useRouter();
  const [ad_id, setAd_id] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    axios({
      url: "/getAd",
      method: "post",
      data: {
        ad_id: router.query.ad,

      },
    })
      .then((response) => {
        // console.log(response.data.data.ad);

        setData(response.data.data.ad);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [router.query.ad]);
  return (
    <>
      <NavBar />
      <div
        className="mx-auto"
        style={{
          backgroundColor: "#f2f5f6",
          height: "100%",
        }}
      >
        <div className="d-flex col-12">
          <div className="col-3">
            <EShowSideBar  data={data} />
          </div>
          <div className="  col-9 ">
            <EShowContent data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EShowCase;
