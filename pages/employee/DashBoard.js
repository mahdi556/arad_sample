import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";

import ProgressBar from "../../components/Employee/Resume/ProgrressBar";
const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div
        className="d-flex"
        style={{
          width: "100%",
        //   height: "100vh",
          marginTop: 80,
          backgroundColor:'#f2f5f6'
        }}
      >
        <RightMenu />
         <ProgressBar />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
