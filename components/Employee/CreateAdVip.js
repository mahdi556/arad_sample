import { useRouter } from "next/router";
import { useState } from "react";
import VerticalProgress from "./NormalAd/VerticalProgress";
import CreateResumeBody from "./VipAd/CreateResumeBody";

const CreateEmployeeAd = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [p_height, setP_height] = useState("10%");
  const handleStep = (sn) => {
    setStep(sn);
    sn==1 ? setP_height('10%') : 
    sn==2 ? setP_height('25%') : 
    sn==3 ? setP_height('35%') : 
    sn==4 ? setP_height('45%') : 
    sn==5 ? setP_height('55%') : 
    sn==6 ? setP_height('65%') : 
    sn==7 ? setP_height('80%') : 
     setP_height('97%') ;
   
  };

  return (
    <>
        <div
          style={{
            width: "100%",
            backgroundColor: "#f2f5f6",
            paddingTop: "9rem",
            paddingBottom: 400,
          }}
        >
          <div
            style={{
              width: "62%",
              marginRight: "13%",
              marginLeft: "25%",
            }}
          >
            

            <div className="d-flex justify-content-between  ">
              <div
                style={{
                  width: "15%",
                }}
              >
                <VerticalProgress step={step} p_height={p_height} />
              </div>
              <div
                style={{
                  width: "83%",
                }}
              >
                <CreateResumeBody handleStep2={handleStep}/>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default CreateEmployeeAd;
