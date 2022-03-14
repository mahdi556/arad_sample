import UserProvider from "../../context/employeeContext/User/UserProvider";
import Footer from "../Footer";
import NavBar from "../NavBar";
import HomeAds from "./HomeAds";
import HomeTopSection from "./HomeTopSection";

const HomePage = () => {
  return (
    <>
      <UserProvider>
        <NavBar />
        <HomeTopSection />

        <HomeAds />

        <Footer />
      </UserProvider>
    </>
  );
};

export default HomePage;
