 import Layout from '../../components/Layouts/Employer/layout'
 import Head from "next/head";
import Setting from "../../components/Employer/Dashboard/Setting";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>شرکت های معتبر</title>
        </Head>
        <Setting />
      </Layout>
    </>
  );
};

export default Dashboard;
