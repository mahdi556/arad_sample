import NavBar from "../../components/NavBar";
import EmployeeAd from "../../components/Admin/EmployeeAd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../axios";
const Admin = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  console.log(router.query.ad);
  useEffect(() => {
    axios({
      url: "/getAd",
      method: "post",
      data: {
        ad_id: router.query.ad,
      },
    })
      .then((response) => {
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
        }}
      >
        {/* {data.length > 0 && ( */}
        <div className="d-flex col-12 mt-5">
          <EmployeeAd data={data} />
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Admin;
