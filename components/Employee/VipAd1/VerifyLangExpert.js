  
import { useContext } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import BreakLine from "../Resume/FormInputs/BreakLine";
const VerifyLangExpert = () => {
  const normalAdContext = useContext(NormalAdContext);
  return (
    <>
      <div
        className="col-12 px-4"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        مهارت زبان
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            normalAdContext.dispatch({ type: "step", payload: 5 });
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

      {normalAdContext.data.langExpert.length == 0 ? (
        <div className="text-center">
          مهارت زبان ثبت نشده است
          <BreakLine />
        </div>
      ) : (
        <>
          <div className="d-flex col-12">
            <div className="col-12">
              {normalAdContext.data.langExpert.map((item, key) => (
                <>
                  <div className="d-flex px-4">
                    <div className="d-flex   justify-content-start align-items-center me-5 mb-3 ">
                      <h5 className=" me-2 fs-6 fw-light">نام زبان :</h5>
                      <h6 className=" ">{item.text}</h6>
                    </div>
                    <div className="d-flex  justify-content-start align-items-center mb-3  ">
                      <h5 className=" me-2  fs-6 fw-light">سطح زبان:</h5>
                      <h6 className=" ">{item.level.name}</h6>
                    </div>
                  </div>
                </>
              ))}
            </div>
            
          </div>

          <BreakLine />
        </>
      )}
    </>
  );
};

export default VerifyLangExpert;
