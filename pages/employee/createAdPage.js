import NavBar from "../../components/NavBar";
import CreateEmployeeAd from "../../components/Employee/CreateAd";
import CreateEmployeeAdVip from "../../components/Employee/CreateAdVip";
import Footer from "../../components/Footer";
 import { useRouter } from 'next/router'

const CreateAdEmployeePage = () => {
   
    const router = useRouter()
     
    return (
      <>
          <NavBar />
          {
            router.query.type == 'normal' ?
            <CreateEmployeeAd /> :
            router.query.type == 'Vip' ?
            <CreateEmployeeAdVip /> :
            null
          }  
          <Footer />
      </>
    );
  };

export default CreateAdEmployeePage;
