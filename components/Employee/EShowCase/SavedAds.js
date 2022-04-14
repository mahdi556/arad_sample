import { useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import axios from "../../../axios";

const SavedAds = ({ id }) => {
  const [rads, setRads] = useState({});

  useEffect(() => {
    axios({
      url: "/getEmployerAds",
      method: "post",
      data: {
        user_id: id,
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
      <div>
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
export default SavedAds;
