import axios from "../../../axios";
import { useEffect, useState } from "react";
import ClinicBox from "./ClinicBox";
 const ClinicList = ({medicalID}) => {
  const [clinic, setClinic] = useState({});
  useEffect(() => {
    
    axios({
      url: "/myClinics",
      method: "post",
      data: {
         medical_id: medicalID,
      },
    })
      .then((response) => {
        console.log(response);
        setClinic(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [medicalID]);
   const width = "33%";
   return (
    <>
      <div
        className="row gx-5 gy-4   "
        style={{
          //   height: "100vh",
          backgroundColor: "#f2f5f6",
        }}
      >
        { clinic.length &&
        clinic.map((item, key) => (
          <ClinicBox width={width} name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ClinicList;
 