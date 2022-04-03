import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import FieldError from "../../Common/FieldError";

const Description = () => {
  const [display, setDisplay] = useState("none");

  const normalAdContext = useContext(NormalAdContext);
  useEffect(() => {
    if (normalAdContext.data.stepClick) {
      if (
         normalAdContext.data.description !== ""
      ) {
        normalAdContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        normalAdContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [normalAdContext.data.stepClick]);
  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          توضیحات آگهی
        </div>

        <div className="col-12 mb-2 mt-2">
          {/* <label
            className="fs-6  "
            style={{
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            
          </label> */}
          <textarea
            className={
              normalAdContext.data.title == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            rows={5}
            style={{
              height:150
            }}
            value={normalAdContext.data.description}
            onChange={(e) => {
              normalAdContext.dispatch({
                type: "description",
                payload: e.target.value,
              });
            }}
          />
           <FieldError
              data={normalAdContext.data.description}
              display={display}
            />
        </div>
      </div>
    </>
  );
};

export default Description;
