import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";

const SubmitEn = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState("");
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {
    resumeContext.dispatch({ type: "type", payload: "en" });
  }, []);
  const sendData = () => {
    const formData = new FormData();
    setDisabled("disabled");
    axios({
      url: "/submiten",
      method: "post",
      data: resumeContext,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => {
        formData.append("image", resumeContext.data.userImageFile);
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
            setDisabled('')
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
        <button
          type="button"
          className="py-2 text-white"
          style={{
            width: "35%",
            fontSize: "1.5rem",
            backgroundColor: "#E92B59",
            textAlign: "center",
            borderRadius: 8,
            cursor: "pointer",
          }}
          disabled={disabled}
          onClick={() => sendData()}
        >
          ثبت و پرداخت آگهی
        </button>
      </div>
    </>
  );
};
export default SubmitEn;
