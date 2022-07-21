import { useContext, useEffect, useState } from "react";
import AdBoxShowCase from "./AdBoxShowCase";
import axios from "axios";
import AuthContext from "context/Auth/AuthContext";

const SavedAds = ({ id }) => {
  const [rads, setRads] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user &&
      axios({
        url: "/EmployeeSavedAds",
        method: "get",
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
  }, [user]);
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
export default SavedAds;
