import { useContext } from "react";
import AdContext from "context/Ad/AdContext";
import EnIntro from "components/Ads/Sec2/IntroTypes/EnIntro";
import EvIntro from "components/Ads/Sec2/IntroTypes/EvIntro";
import RnIntro from "./IntroTypes/RnIntro";

const Intro = () => {
  const { type } = useContext(AdContext);
  return (
    <>
      {type == "ev" ? (
        <EvIntro />
      ) : type == "en" ? (
        <EnIntro />
      ) : ["rv", "rn"].includes(type) ? (
        <RnIntro />
      ) : null}
    </>
  );
};
export default Intro;
