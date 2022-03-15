import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employeeContext/CreateAd/NormalAd/NormalAdContext";
const VerifyFirstForm = ({handleStep}) => {
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
              معرفی من
              <div
                className="ms-2 pt-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                 handleStep(1,'10%')
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

            <div className="d-flex mt-3 align-items-center">
              <div className="rShadow">
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
              <div className="ms-3 rShadow">
                <video
                  className="rShadow"
                  src={normalAdContext.data.userVideo}
                  width={120}
                  height={120}
                  type="video/*"
                  controls
                  style={{
                    borderRadius: 12,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyFirstForm;
