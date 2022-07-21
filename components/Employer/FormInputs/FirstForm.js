const FirstForm=()=>{
    return(
        <div
        className="row pt-4 pb-4"
        style={{
          background: "#fff",
          borderRadius: 15,
          paddingRight: "5rem",
          paddingLeft: "5rem",
        }}
      >
        <div className="d-flex   align-items-center">
          <h6 className="arad-red fs-6 px-1">با تکمیل این قسمت ،</h6> 
          <h6 className=" arad-red fs-6 fw-bold px-1">اعتبار شرکت خود</h6>
          <h6 className="arad-red fs-6  px-1">را در آگهی نمایش دهید</h6>
          <h6 className="fs-6 arad-blue px-1"> <u> به عنوان مثال</u>  </h6>
        </div>
        <div className="d-flex align-items-start pt-1">
          <div className="d-flex col-3 flex-column   pe-2">
            <div
              className="d-flex  "
              style={{
                height: 130,
                backgroundColor: "#EBEBEB",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 7,
                width: "90%",
              }}
            >
              <img
                className="me-2"
                src= "../../../../assets/images/upload-logo.png" 
                width="10%"
              />
              آپلود لوگو
            </div>
            <div
              style={{
                marginTop: 5,
                backgroundColor: "#11999E",
                padding: "0.2rem",
                borderRadius: 5,
                color: "#fff",
                fontSize: "0.7rem",
                width: "90%",
                textAlign: "center",
              }}
            >
              کامل کردن پروفایل سازمانی
            </div>
          </div>
          <div className="d-flex col-9 ps-3 pt-2  ">
            <div className="col-12 text-right">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                نام سازمان
              </label>
              <input
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
                type="text"
              />
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                شناسه ملی شرکت
              </label>
              <input
                className="col-12"
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                }}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default FirstForm