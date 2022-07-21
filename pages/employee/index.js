import Layout from "../../components/Layouts/Employee/layout";
import Head from "next/head";
import RShowMain from "../../components/Employee/EShowCase/RShowMain";
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
