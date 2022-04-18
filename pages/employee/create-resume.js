import Layout from "../../components/Layouts/Employee/layout";
import Head from "next/head";
import CreateResumeBody from "../../components/Employee/Resume/CreateResumeBody";
import ResumeProvider from "../../context/employeeContext/CreateResume/ResumeProvider";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>رزومه های ارسال شده</title>
        </Head>
        <ResumeProvider>
          <CreateResumeBody />
        </ResumeProvider>
      </Layout>
    </>
  );
};

export default Dashboard;
