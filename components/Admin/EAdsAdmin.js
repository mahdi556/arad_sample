import axios from "axios";
import { useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";

const EAdsAdmin = () => {
  const [eads, setEads] = useState({});
  const [rads, setRads] = useState({});
  useEffect(() => {
    axios({
      url: "/getAdminAds",
      method: "post",
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
      <div className="col-12 pt-5">
        <div className="col-8 mt-5 mx-auto">
          {eads.length &&
            eads.map((item, key) => (
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
export default EAdsAdmin;
