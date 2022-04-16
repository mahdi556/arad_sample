 import Layout from '../../components/Layouts/Employee/layout'
 import Head from "next/head";
import Companies from "../../components/Employee/EShowCase/Companies";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>شرکت های معتبر</title>
        </Head>
        <Companies />
      </Layout>
    </>
  );
};

export default Dashboard;
