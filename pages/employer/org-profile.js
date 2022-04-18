import Layout from "../../components/Layouts/Employee/layout";
import Head from "next/head";

import OrgProfile from "../../components/Employer/Dashboard/OrgProfile";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>رزومه های ارسال شده</title>
        </Head>
        <OrgProfile />
      </Layout>
    </>
  );
};

export default Dashboard;
