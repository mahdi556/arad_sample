import { useContext } from "react";
import AdContext from "context/Ad/AdContext";
import EPersonalData from "components/Ads/Sec3/EPersonalData";
import RPersonalData from "components/Ads/Sec3/RPersonalData";

const PersonalData = () => {
  const { type } = useContext(AdContext);
  const { stepClick } = useContext(AdContext);
  console.log(stepClick);
  return (
    <>
      {["ev", "en"].includes(type) ? (
        <EPersonalData />
      ) : ["rv", "rn"].includes(type)? (
        <RPersonalData />
      ) : null}
    </>
  );
};
export default PersonalData;
