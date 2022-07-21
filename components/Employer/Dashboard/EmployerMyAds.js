import { useContext, useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import AuthContext from "context/Auth/AuthContext";
import axios from "axios";

const EmployerMyAds = () => {
  const { user } = useContext(AuthContext);
  const [rads, setRads] = useState({});
  useEffect(() => {
    if (user) {
      axios({
        url: "/getEmployerAds",
        method: "post",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => {
          setRads(response.data.data.rads);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [user]);
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
