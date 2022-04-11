import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Resume from "../../components/Employee/Resume";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";
import Layout from "../../components/Layouts/layout";
import Head from "next/head";
import Link from "next/link";
import CreateEmployeeAd from "../../components/Employee/CreateAd";
import RShowMain from "../../components/Employer/RShowCase/RShowMain";
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
