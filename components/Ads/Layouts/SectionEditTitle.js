import AdContext from "context/Ad/AdContext";
import { useContext } from "react";

const SectionEditTitle = ({ title, step }) => {
  const { setStep } = useContext(AdContext);

  return (
    <>
      <div className="d-flex align-items-center">
        <h1
          style={{
            fontFamily: "iranBlack",
            fontSize: 20,
            paddingTop: 10,
          }}
        >
          {title}
        </h1>
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setStep(step)}
        >
          <img
            src="/assets/images/editForm.png"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
    </>
  );
};

export default SectionEditTitle;
