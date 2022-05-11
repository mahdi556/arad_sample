import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../axios";
import EmployerAd from "../../components/Admin/EmployerAd";
const Admin = () => {
  const router = useRouter();
  const [data, setData] = useState({});
console.log(router.query.ad)
  useEffect(() => {
    axios({
      url: "/getAd",
      method: "post",
      data: {
        ad_id: router.query.ad,
      },
    })
      .then((response) => {
          console.log(response)
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
            <EmployerAd data={data} />
          </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Admin;
