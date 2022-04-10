import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Resume from "../../components/Employee/Resume";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";
const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex mt-5">

         <RightMenu />
      </div>
       

      <Footer />
    </>
  );
};

export default Dashboard;
