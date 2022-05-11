import { useContext, useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import axios from "../../../axios";
import UserContext from "../../../context/employeeContext/User/UserContext";

const EmployerMyAds = () => {
  const userContext = useContext(UserContext);
  const [rads, setRads] = useState({});
   useEffect(() => {
    axios({
      url: "/getEmployerAds",
      method: "post",
      data: {
        user_id: userContext.data.user.id,
      },
    })
      .then((response) => {
        setRads(response.data.data.rads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userContext.data.user.id]);
  return (
    <>
      <div className="col-12 mt-5">
      <h1 className=" homeColTitel mx-auto ">آگهی های ثبت شده</h1>

        <div className="mt-5 col-8 mx-auto">
          {rads.length &&
            rads.map((item, key) => (
              <AdBoxShowCase
                width={" col-xl-12 col-xxl-12 "}
                data={item}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default EmployerMyAds;
