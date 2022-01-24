const VerifyData = ({ personalData }) => {
  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
        }}
      >
        اطلاعات شخصی
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">نام:</h5>
        <h6 className="col-6">{personalData.name}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">نام خانوادگی:</h5>
        <h6 className="col-6">{personalData.lastname}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تاریخ تولد:</h5>
        <h6 className="col-6">
          {personalData.birthday.year}/{personalData.birthday.month}/
          {personalData.birthday.day}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">جنسیت:</h5>
        <h6 className="col-6">{personalData.sex == 1 ? "مرد" : "زن"}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">وضعیت تاهل:</h5>
        <h6 className="col-6">
          {personalData.married == 1 ? "مجرد" : "متاهل"}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تقاضای بیمه:</h5>
        <h6 className="col-6">
          {personalData.insurrance == 1 ? "دارم" : "ندارم"}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">استان:</h5>
        <h6 className="col-6">{personalData.province}</h6>
      </div>{" "}
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">منطقه:</h5>
        <h6 className="col-6">{personalData.city}</h6>
      </div>
    </>
  );
};

export default VerifyData;
