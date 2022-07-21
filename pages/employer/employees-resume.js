import Layout from "../../components/Layouts/Employer/layout";
import Head from "next/head";
import Resumes from "../../components/Employer/Dashboard/Resumes";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>رزومه های ارسال شده</title>
        </Head>
        <Resumes />
      </Layout>
    </>
  );
};

export default Dashboard;
