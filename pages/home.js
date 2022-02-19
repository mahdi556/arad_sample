import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopBanner from "../components/Common/TopBanner";
import HomeAds from "../components/Common/HomeAds";
const Home = () => {
  return (
    <>
      <NavBar />
      <TopBanner />

      <div className="  col-12">
        <HomeAds />
      </div>

      <Footer />
    </>
  );
};

export default Home;
