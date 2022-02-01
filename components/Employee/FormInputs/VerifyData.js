import Image from "next/image";
import { useContext } from "react";
import VipContext from "../../../context/employeeContext/VipContext";

const VerifyData = ({ handleStep }) => {
  const vipContext = useContext(VipContext);
  return (
    <>
      <div
        className="col-12"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        اطلاعات شخصی
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            handleStep(2, "30%");
          }}
        >
          <Image
            src="/assets/images/editForm.png"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">نام:</h5>
        <h6 className="col-6">{vipContext.data.name}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">نام خانوادگی:</h5>
        <h6 className="col-6">{vipContext.data.lastname}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تاریخ تولد:</h5>
        <h6 className="col-6">
          {vipContext.data.birthday.year}/{vipContext.data.birthday.month}/
          {vipContext.data.birthday.day}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">جنسیت:</h5>
        <h6 className="col-6">{vipContext.data.sex == 1 ? "مرد" : "زن"}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">وضعیت تاهل:</h5>
        <h6 className="col-6">
          {vipContext.data.married == 1 ? "مجرد" : "متاهل"}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تقاضای بیمه:</h5>
        <h6 className="col-6">
          {vipContext.data.insurrance == 1 ? "دارم" : "ندارم"}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">استان:</h5>
        <h6 className="col-6">{vipContext.data.province.name}</h6>
      </div>{" "}
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">منطقه:</h5>
        <h6 className="col-6">{vipContext.data.city.name}</h6>
      </div>
    </>
  );
};

export default VerifyData;
