import axios from "../../../axios";
import { useEffect, useState } from "react";
import MedicalBox from "./MedicalBox";
const MedicalList = () => {
  const [medical, setMedical] = useState({});
  useEffect(() => {
    axios({
      url: "/medicals",
      method: "get",
    })
      .then((response) => {
        console.log(response);
        setMedical(response.data.data.medicals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(medical, "medical");
  const width = "33%";
  return (
    <>
      <div
        className="row gx-5 gy-4   "
        style={{
          backgroundColor: "#f2f5f6",
        }}
      >
        {medical.length &&
          medical.map((item, key) => (
            <MedicalBox
              width={width}
              name={item.name}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
    </>
  );
};

export default MedicalList;
