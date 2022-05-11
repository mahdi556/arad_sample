import Layout from "../../components/Layouts/Employer/layout";
import Head from "next/head";
import EmployerMyAds from "../../components/Employer/Dashboard/EmployerMyAds";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>لیست آگهی های ثبت شده</title>
        </Head>
        <EmployerMyAds />
      </Layout>
    </>
  );
};

export default Dashboard;
