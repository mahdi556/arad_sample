import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";

import ProgressBar from "../../components/Employee/Resume/ProgrressBar";
import CreateResumeBody from "../../components/Employee/Resume/CreateResumeBody";
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
          backgroundColor: "#E5E5E5",
        }}
      >
        <RightMenu />
        <ProgressBar />
        <CreateResumeBody />
        <ProgressBar />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
