import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/router";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
const SubmitRn = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState("");
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {
    resumeContext.dispatch({ type: "type", payload: "ev" });
  }, []);
  const sendData = () => {
    console.log(resumeContext.data.sampleEx)
    setDisabled("disabled");
    const formData = new FormData();
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
        formData.append("video", resumeContext.data.userVideoFile);
        formData.append("type", "normalEn");
        formData.append("ad_id", response.data.ad_id);
        for (let i = 0; i < resumeContext.data.sampleEx.length; i++) {
          formData.append('sample'+i, resumeContext.data.sampleEx[i].file);
        }
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
            console.log(response.data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "آگهی با موفقیت ثبت شد",
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
        // console.log(error.response.data.errors);
        setDisabled("");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "مشکلی در ذخیره آگهی پیش آمد",
          showConfirmButton: true,
          // timer:3500
        });
      });
  };

  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <button
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
export default SubmitRn;
