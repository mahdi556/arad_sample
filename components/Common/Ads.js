import AdBox from "../AdBox";
import Image from "next/image";
import AdBoxNew from "../AdBoxNew";
const Ads = () => {
  const width='33%'
  return (
    <>
      <div
        class="row gx-5 gy-4   "
        style={{
        //   height: "100vh",
          backgroundColor: "#f2f5f6",
        }}
      >
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
        <AdBoxNew width={width}/>
      </div>
    </>
  );
};

export default Ads;
