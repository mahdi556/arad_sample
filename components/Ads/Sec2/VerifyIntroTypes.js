import { useContext } from "react";
import AdContext from "context/Ad/AdContext";
import VerifyIntroVip from "./VerifyIntro/EvVerify";
import VerifyIntroNormal from "./VerifyIntro/EnVerify";
import RnVerify from "./VerifyIntro/RnVerify";

const VerifyIntroTypes = () => {
  const { type } = useContext(AdContext);
  return (
    <>
      {type == "ev" ? (
        <VerifyIntroVip />
      ) : type == "en" ? (
        <VerifyIntroNormal />
      ) : ["rv", "rn"].includes(type) ? (
        <RnVerify />
      ) : null}
    </>
  );
};
export default VerifyIntroTypes;
