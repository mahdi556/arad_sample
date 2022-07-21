import AdContext from "context/Ad/AdContext";
import { useContext } from "react";
import BreakLine from "components/Ads/Tools/BreakLine";
import ContactForm from "components/Ads/Inputs/Contact";
import DegreeDoc from "components/Ads/Inputs/DegreeDoc";
import Description from "components/Ads/Inputs/Description";
import JoBExperience from "components/Ads/Inputs/JobExperience";
 import SampleEx from "components/Ads/Inputs/SampleEx";
import Title from "components/Ads/Sec1/Title";
import Intro from "components/Ads/Sec2/Intro";
import VerifyIntroTypes from "components/Ads/Sec2/VerifyIntroTypes";
import PersonalData from "components/Ads/Sec3/PersonalData";
import VerifyPersonalData from "components/Ads/Sec3/VerifyPersonal/EVerifyPersonal";
import SectionLayoutMain from "components/Ads/Layouts/SectionLayoutMain";
import SoftExpert from "components/Ads/Inputs/SoftExpert";
import StepButton from "components/Ads/Tools/StepButton";
import VerifyDegree from "components/Ads/Verify/VerifyDegree";
import VerifyDescription from "components/Ads/Verify/VerifyDescription";
import VerifyExperience from "components/Ads/Verify/VerifyExperience";
import VerifySampleEx from "components/Ads/Verify/VerifySampleEx";
import VerifySoftExpert from "components/Ads/Verify/VerifySoftExpert";
import SubmitAd from "components/Ads/SubmitAd";

const EmployeeProcess = () => {
  const { step, type } = useContext(AdContext);
  return (
    <>
         <Title />
        {step == 1 && <Intro />}
        {step > 1 && <VerifyIntroTypes />}
        <SectionLayoutMain>
          {step == 2 && <PersonalData />}
          {step > 2 && <VerifyPersonalData />}
          {step == 3 && type == "en" && (
            <>
              <BreakLine />
              <Description />
            </>
          )}
          {step == 3 && type == "ev" && (
            <>
              <BreakLine />
              <JoBExperience />
            </>
          )}
          {step > 3 && type == "ev" && <VerifyExperience />}
          {step == 4 && type == "ev" && (
            <>
              <DegreeDoc />
            </>
          )}
          {step > 4 && type == "ev" && <VerifyDegree />}
          {step == 5 && type == "ev" && (
            <>
              <SoftExpert />
            </>
          )}
          {step > 5 && type == "ev" && <VerifySoftExpert step={5} />}
          {step == 6 && type == "ev" && (
            <>
              <SampleEx />
            </>
          )}
          {step > 6 && type == "ev" && <VerifySampleEx />}
          {step == 7 && (
            <>
              <Description />
            </>
          )}
          {step > 7 && <VerifyDescription step={7} />}
        </SectionLayoutMain>
        {step < 8 && type == "ev" && <StepButton />}
        {step < 3 && type == "en" && <StepButton />}
        {step == 8 && type == "ev" && (
          <>
            <ContactForm />
            <SubmitAd />
          </>
        )}
        {step == 3 && type == "en" && (
          <>
            <SubmitAd />
          </>
        )}
     </>
  );
};

export default EmployeeProcess;
