import { useContext } from "react";
import NormalAdContext from "../../../context/employeeContext/CreateAd/NormalAd/NormalAdContext";
import axios from "../../../axios";
const SubmitEn = () => {
  const normalAdContext = useContext(NormalAdContext);
  console.log(normalAdContext.data.userImageFile[0]);
  const formData = new FormData();

  for (var key of formData.entries()) {
    console.log(key[0] + ", " + key[1]);
  }

  const sendData = () => {
    const formData = new FormData();

    formData.append("name", 4525);
    formData.append("image", {
      uri: normalAdContext.data.userImageFile[0],
    });

    axios({
      url: "/submiten",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      
      data: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <div
          className="py-2 text-white"
          style={{
            width: "35%",
            fontSize: "1.5rem",
            backgroundColor: "#E92B59",
            textAlign: "center",
            borderRadius: 8,
            cursor: "pointer",
          }}
          onClick={() => sendData()}
        >
          ثبت و پرداخت آگهی
        </div>
      </div>
    </>
  );
};
export default SubmitEn;
