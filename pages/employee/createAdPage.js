import CreateEmployeeAd from "../../components/Employee/CreateAd";
import CreateEmployeeAdVip from "../../components/Employee/CreateAdVip";
import { useRouter } from "next/router";
import ResumeProvider from "context/Ad/CreateResume/ResumeProvider";

const CreateAdEmployeePage = () => {
  const router = useRouter();

  return (
    <>
       {router.query.type == "normal" ? (
        <ResumeProvider>
          <CreateEmployeeAd />
        </ResumeProvider>
      ) : router.query.type == "vip" ? (
        <ResumeProvider>
          <CreateEmployeeAdVip />
        </ResumeProvider>
      ) : null}
     </>
  );
};

export default CreateAdEmployeePage;
