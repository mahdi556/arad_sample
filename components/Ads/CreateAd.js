import AdContext from "context/Ad/AdContext";
import { useContext, useEffect } from "react";
import Layout from "components/Ads/Layouts/layout";
import EmployeeProcess from "./EmployeeProcess";
import EmployerProcess from "./EmployerProcess";
import { useRouter } from "next/router";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";

const CreateAd = () => {
  const router = useRouter();
  const { type, setType } = useContext(AdContext);
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {
    if (type) {
      resumeContext.dispatch({ type: "type", payload: type });
    } else {
      router.push({pathname:"/adtype"});
    }
  }, [type]);
  return (
    <>
      <Layout>
        {["ev", "en"].includes(type) ? (
          <EmployeeProcess />
        ) : ["rv", "rn"].includes(type) ? (
          <EmployerProcess />
        ) : null}
      </Layout>
    </>
  );
};

export default CreateAd;
