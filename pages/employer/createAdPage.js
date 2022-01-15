import NavBar from "../../components/NavBar";
import CreateEmployerAdVip from "../../components/Employer/CreateAdVip";
import CreateEmployerAd from "../../components/Employer/CreateAd";
import Footer from "../../components/Footer";
 import { useRouter } from 'next/router'
const CreateAdEmployerPage = () => {
    const router = useRouter()
     
  return (
    <>
        <NavBar />
        {
          router.query.type == 'normal' ?
          <CreateEmployerAd /> :
          router.query.type == 'Vip' ?
          <CreateEmployerAdVip /> :
          null
        }  
        <Footer />
    </>
  );
};

export default CreateAdEmployerPage;
