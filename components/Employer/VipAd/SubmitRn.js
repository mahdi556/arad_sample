import { useContext, useEffect } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import Swal from 'sweetalert2'
import axios from "../../../axios";
const SubmitRn = () => {
  const normalAdContext = useContext(NormalAdContext);
  useEffect(()=>{
    normalAdContext.dispatch({type:'type',payload:'rv'})
   },[])
  const sendData = () => {
     console.log(normalAdContext.data)
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
        formData.append("type",  "normalEn");
        formData.append("ad_id", response.data.ad_id);
        axios({
          url: "/storeMedia",
          method: "post",
          data:formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
          .then((response) => {
             Swal.fire({
              position:'center',
              icon:'success',
              title: 'آگهی با موفقیت ثبت شد',
              showConfirmButton:true,
              // timer:3500
            })     
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
export default SubmitRn;
