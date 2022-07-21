import Layout from "../../components/Layouts/Employee/layout";
import Head from "next/head";
import Setting from "../../components/Employee/EShowCase/Setting";
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
