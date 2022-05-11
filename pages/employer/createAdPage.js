import NavBar from "../../components/NavBar";
import CreateEmployerAdVip from "../../components/Employer/CreateAdVip";
import CreateEmployerAd from "../../components/Employer/CreateAd";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ResumeProvider from "../../context/employeeContext/CreateResume/ResumeProvider";
const CreateAdEmployerPage = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <ResumeProvider>
        {router.query.type == "normal" ? (
          <CreateEmployerAd />
        ) : router.query.type == "vip" ? (
          <CreateEmployerAdVip />
        ) : null}
      </ResumeProvider>
      <Footer />
    </>
  );
};

export default CreateAdEmployerPage;
