import Layout from "../../components/Layouts/Employer/layout";
import Head from "next/head";
import RShowMain from "../../components/Employer/Dashboard/RShowMain";
 const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <RShowMain />
      </Layout>
    </>
  );
};

export default Dashboard;
