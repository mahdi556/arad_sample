import { useContext, useEffect } from "react";
import NormalAdContext from "../../../context/employeeContext/CreateAd/NormalAd/NormalAdContext";
import axios from "../../../axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const SubmitEn = () => {
  const router = useRouter();
  
  const normalAdContext = useContext(NormalAdContext);
  useEffect(() => {
    normalAdContext.dispatch({ type: "type", payload: "en" });
  }, []);

  const sendData = () => {
    const formData = new FormData();

    axios({
      url: "/submiten",
      method: "post",
      data: normalAdContext,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => {
        formData.append("image", normalAdContext.data.userImageFile);
        formData.append("type", "normalEn");
        formData.append("ad_id", response.data.ad_id);
        axios({
          url: "/storeMedia",
          method: "post",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
          .then((response) => {
            console.log(response);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "آگهی با موفقیت ثبت گردید.",
              showConfirmButton: true,
              // timer:3500
            });
            router.push({
              pathname: "/",
            });
          })
          .catch(function (error) {
            console.log(error);
          });
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