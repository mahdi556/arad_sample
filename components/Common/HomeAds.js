import AdBox from "../AdBox";
import Image from "next/image";
import AdBoxNew from "../AdBoxNew";
const HomeAds = () => {
  const width= '50%';
  return (
    <>
      <div
        className="d-flex justify-content-center "
        style={{
          width: "90%",
        }}
      >
        <div class="row col-5   gx-3 gy-4  me-4 ">
          
          <AdBoxNew width={width} />
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
        </div>
        <div class="row  col-5 gx-3 gy-4  ms-4  ">
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          <AdBoxNew width={width}/>
          
        </div>
      </div>

      
    </>
  );
};

export default HomeAds;
