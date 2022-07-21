import Layout from "../../components/Layouts/Employee/layout";
import Head from "next/head";
import EShowContent from "../../components/Employee/EShowCase/EShowContent";
import { useRouter } from "next/router";
const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>رزومه های ارسال شده</title>
        </Head>
        <EShowContent section={router.query.tab} />
       </Layout>
    </>
  );
};

export default Dashboard;
