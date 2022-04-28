  
import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
const VerifyFirstForm = ({ handleStep }) => {
  const [imageUrl, setImageUrl] = useState("");
  const normalAdContext = useContext(NormalAdContext);
  useEffect(() => {
    if (normalAdContext.data.userImageFile.name) {
      setImageUrl(URL.createObjectURL(normalAdContext.data.userImageFile));
    }
  }, []);

  return (
    <>
      <div
        className="row  pt-4 pb-4"
        style={{
          background: "#fff",
          borderRadius: 15,
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div className="d-flex align-items-start pt-1">
          <div
            className="d-flex col-12 flex-column   pe-2"
            style={{
              fontWeight: 600,
            }}
          >
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
              معرفی کارفرما
              <div
                className="ms-2 pt-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleStep(1, "10%");
                }}
              >
                <img
                  src="/assets/images/editForm.png"
                  width={20}
                  height={20}
                  layout="fixed"
                />
              </div>
            </div>

            <div className="d-flex col-12 justify-content-evenly mt-3 align-items-center">
              <div className="col- 4 rShadow">
                <img
                  className="rShadow"
                  src={imageUrl}
                  width={120}
                  height={120}
                  style={{
                    borderRadius: 12,
                  }}
                />
              </div>
              <div className="d-flex col-8 flex-column">
                <div className="d-flex ms-5  col-6 justify-content-start align-items-center mb-4 ">
                  <h5 className="col-6 fs-6 fw-light">نام شرکت:</h5>
                  <h6 className="col-6 fs-6  ">{normalAdContext.data.companyName}</h6>
                </div>
                <div className="d-flex ms-5  col-6 justify-content-start align-items-center mb-4 ">
                  <h5 className="col-6 fs-6 fw-light">شناسه ملی:</h5>
                  <h6 className="col-6 fs-6  ">
                    {normalAdContext.data.companyId}
                  </h6>
                </div>
                <div className="col-5 ms-5 py-2"
                  style={{
                    marginTop: 5,
                    backgroundColor: "#11999E",
                    padding: "0.2rem",
                    borderRadius:10,
                    color: "#fff",
                    fontSize: "0.8rem",
                     textAlign: "center",
                     cursor:'pointer'
                  }}
                >
                  تکمیل پروفایل سازمانی
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyFirstForm;
