import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Resume from "../../components/Employee/Resume";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";
import Layout from "../../components/Layouts/layout";
import Head from "next/head";
import EShowContent from "../../components/Employee/EShowCase/EShowContent";
  const Dashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>رزومه های ارسال شده</title>
        </Head>
        <EShowContent />
        </Layout>
    </>
  );
};

export default Dashboard;
