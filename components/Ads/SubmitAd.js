import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import AuthContext from "context/Auth/AuthContext";
import AdContext from "context/Ad/AdContext";

const SubmitAd = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState("");
  const resumeContext = useContext(ResumeContext);
  const { user } = useContext(AuthContext);
  const { type } = useContext(AdContext);
  const sendData = () => {
    const formData = new FormData();
    setDisabled("disabled");
    axios({
      url: "/submitAd",
      method: "post",
      data: resumeContext,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => {
        formData.append("image", resumeContext.data.userImageFile);
        formData.append("type", type);
        formData.append("ad_id", response.data.ad_id);
        axios({
          url: "/storeMedia",
          method: "post",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
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
            setDisabled("");
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
          {disabled ? (
            <>
              <div className="d-flex col-12 justify-content-center align-items-center  ">
                <span
                  className="spinner-border spinner-border-sm me-3"
                  role="status"
                ></span>
                <h5>در حال ارسال</h5>
              </div>
            </>
          ) : (
            <h6>ثبت و پرداخت آگهی</h6>
          )}
        </div>
      </div>
    </>
  );
};
export default SubmitAd;
