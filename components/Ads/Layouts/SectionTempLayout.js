import AdContext from "context/Ad/AdContext";
import { useState } from "react";
import { useContext, useEffect } from "react";
import FieldError from "components/Ads/Tools/FieldError";

const SectionTempLayout = ({ children, zindex, necessary, field }) => {
  const { stepClick } = useContext(AdContext);
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    stepClick && setDisplay("");
  }, [stepClick]);
  return (
    <>
      <div
        className="col-12 d-flex flex-column "
        style={{
          maxHeight: "6rem",
          zIndex: zindex,
          marginBottom: 30,
        }}
      >
        {children}

        {necessary && <FieldError data={field} display={display} />}
      </div>
    </>
  );
};

export default SectionTempLayout;
