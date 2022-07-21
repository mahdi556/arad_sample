import AdContext from "context/Ad/AdContext";
import { useContext } from "react";
import BreakLine from "components/Ads/Tools/BreakLine";
import ContactForm from "components/Ads/Inputs/Contact";
import Description from "components/Ads/Inputs/Description";
import Title from "components/Ads/Sec1/Title";
import Intro from "components/Ads/Sec2/Intro";
import VerifyIntroTypes from "components/Ads/Sec2/VerifyIntroTypes";
import PersonalData from "components/Ads/Sec3/PersonalData";
import SectionLayoutMain from "components/Ads/Layouts/SectionLayoutMain";
import SoftExpert from "components/Ads/Inputs/SoftExpert";
import StepButton from "components/Ads/Tools/StepButton";
import VerifyDescription from "components/Ads/Verify/VerifyDescription";
import VerifySoftExpert from "components/Ads/Verify/VerifySoftExpert";
import RVerifyPersonal from "./Sec3/VerifyPersonal/RVerifyPersonal";
import OurExpect from "components/Ads/Inputs/OurExpect";
import VerifyOurExpect from "./RVerify/VerifyOurExpect";
import SubmitAd from "components/Ads/SubmitAd";

const EmployerProcess = () => {
  const { step, type } = useContext(AdContext);
  return (
    <>
      <Title />
      {step == 1 && <Intro />}
      {step > 1 && <VerifyIntroTypes />}
      {
        <SectionLayoutMain>
          {step == 2 && <PersonalData />}
          {step > 2 && <RVerifyPersonal />}
          {step == 3 && (
            <>
              <BreakLine />
              <OurExpect />
            </>
          )}
          {step > 3 && (
            <>
              <BreakLine />
              <VerifyOurExpect />
            </>
          )}
          {step == 4 && type == "rv" && (
            <>
              <SoftExpert />
            </>
          )}
          {step > 4 && type == "rv" && <VerifySoftExpert step={4} />}
          {step == 5 && type == "rv" && (
            <>
              <Description />
            </>
          )}
          {step > 5 && <VerifyDescription step={5} />}
          {step == 4 && type == "rn" && (
            <>
              <Description />
            </>
          )}
        </SectionLayoutMain>
      }
      {step < 4 && type == "rn" && <StepButton />}
      {step < 6 && type == "rv" && <StepButton />}

      {step == 4 && type == "rn" && (
        <>
          <SubmitAd />
        </>
      )}
      {step == 6 && type == "rv" && (
        <>
          <ContactForm />
          <SubmitAd />
        </>
      )}
    </>
  );
};

export default EmployerProcess;
