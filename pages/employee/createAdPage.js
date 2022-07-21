import NavBar from "../../components/NavBar";
import CreateEmployeeAd from "../../components/Employee/CreateAd";
import CreateEmployeeAdVip from "../../components/Employee/CreateAdVip";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ResumeProvider from "../../context/employeeContext/CreateResume/ResumeProvider";

const CreateAdEmployeePage = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      {router.query.type == "normal" ? (
        <ResumeProvider>
          <CreateEmployeeAd />
        </ResumeProvider>
      ) : router.query.type == "vip" ? (
        <ResumeProvider>
          <CreateEmployeeAdVip />
        </ResumeProvider>
      ) : null}
      <Footer />
    </>
  );
};

export default CreateAdEmployeePage;
