import { useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import axios from "axios";

const SavedResume = () => {
  const [rads, setRads] = useState({});
  console.log("response");
  useEffect(() => {
    axios({
      url: "/getEmployerAds",
      method: "post",
      data: {
        user_id: 81,
      },
    })
      .then((response) => {
        setRads(response.data.data.rads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mt-5">
        {rads.length &&
          rads.map((item, key) => (
            <AdBoxShowCase
              width={" col-xl-12 col-xxl-12 "}
              data={item}
              key={item.id}
            />
          ))}
      </div>
    </>
  );
};
export default SavedResume;
