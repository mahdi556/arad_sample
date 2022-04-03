import Image from "next/image";
import { useContext } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
const VerifyOurExpect = ({ handleStep }) => {
  const normalAdContext = useContext(NormalAdContext);
  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          className="col-12 "
          style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          انتظار ما از شما
          <div
            className="ms-2 pt-2"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleStep(3, "75%");
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
        <div className="d-flex col-12 flex-wrap px-4">
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
            <h6 className="col-6  fs-6  ">
              {normalAdContext.data.sex.fa }
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light ">محدوده سنی :</h5>
            <h6 className="col-6 fs-6  ">
              {" "}
              از {normalAdContext.data.ageRange.fa.from} تا{" "}
              {normalAdContext.data.ageRange.fa.to}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOurExpect;
