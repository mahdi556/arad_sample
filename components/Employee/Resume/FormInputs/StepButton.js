import { useContext, useEffect } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import axios from '../../../../axios'
import Swal from "sweetalert2";

const StepButton = ({ handleStep, step,ph }) => {
  const resumeContext = useContext(ResumeContext);

  useEffect(() => {
    resumeContext.dispatch({ type: "type", payload: "re" });
  }, []);
  const sendData = () => {
    const formData = new FormData();
    axios({
      url: "/submitre",
      method: "post",
      data: resumeContext,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => {
        console.log(response);
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
    <div
      className="d-flex mt-5 justify-content-center"
      onClick={() => {
        handleStep(step + 1,ph);
        sendData();
      }}
    >
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
      >
        بعدی
      </div>
    </div>
  );
};

export default StepButton;
