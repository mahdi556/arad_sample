import Image from "next/image";

const HomeTopSection = () => {
  return (
    <>
      <div className="home-top-section">
        <div className="d-flex col-6 ">
          <Image src="/assets/images/homeTop.png" height='400vh' width={700} />
        </div>
        <div className="home-top-sec2">
          <div className="home-top-sec3">میخوام استخدام بشم</div>
 
                 <h4 className="home-top-sec4">یا</h4>
          <div className="home-top-sec5">میخوام استخدام کنم</div>
        </div>
      </div>
    </>
  );
};
export default HomeTopSection;
