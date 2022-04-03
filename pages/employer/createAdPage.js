import NavBar from "../../components/NavBar";
import CreateEmployerAdVip from "../../components/Employer/CreateAdVip2";
import CreateEmployerAd from "../../components/Employer/CreateAd";
import Footer from "../../components/Footer";
 import { useRouter } from 'next/router'
import NormalAdProvider from "../../context/employerContext/CreateAd/NormalAd/NormalAdProvider";
const CreateAdEmployerPage = () => {
    const router = useRouter()
     
  return (
    <>
        <NavBar />
        <NormalAdProvider>

        {
          router.query.type == 'normal' ?
          <CreateEmployerAd /> :
          router.query.type == 'vip' ?
          <CreateEmployerAdVip /> :
          null
        }  
        </NormalAdProvider>
        <Footer />
    </>
  );
};

export default CreateAdEmployerPage;
