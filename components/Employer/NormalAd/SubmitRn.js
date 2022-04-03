import { useContext, useEffect } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import axios from "../../../axios";
const SubmitRn = () => {
  const normalAdContext = useContext(NormalAdContext);
  useEffect(()=>{
    normalAdContext.dispatch({type:'type',payload:'rn'})
   },[])
  const sendData = () => {
    
    const formData = new FormData();

    //  formData.append("title", normalAdContext.data.title);
    //  formData.append("corporateType", normalAdContext.data.corporateType);
    //  formData.append("sex", normalAdContext.data.sex);
    //  formData.append("married", normalAdContext.data.married);
    //  formData.append("insurrance", normalAdContext.data.insurrance);
    //  formData.append("province", normalAdContext.data.province);
    //  formData.append("city", normalAdContext.data.city);
    //  formData.append("jobCategory", normalAdContext.data.salary);
    //  formData.append("salary", normalAdContext.data.salary);
    //  formData.append("cellphone", normalAdContext.data.cellphone);
    //  formData.append("whatsapp", normalAdContext.data.whatsapp);
    //  formData.append("telegram", normalAdContext.data.telegram);
    //  formData.append("email", normalAdContext.data.email);
    //  formData.append("description", normalAdContext.data.description);

    // formData.append("userId", 81);
   
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
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
            console.log(response);
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
