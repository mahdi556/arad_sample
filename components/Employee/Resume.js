import CreateResumeBody from "./Resume/CreateResumeBody";
import EnProgrressBar from "./Resume/EnProgrressBar";
import RightMenu from "./RightMenu/RightMenu";
import ProgressBar from "./Resume/ProgrressBar";
import ResumeProvider from "../../context/employeeContext/CreateResume/ResumeProvider";
import VipProvider from "../../context/employeeContext/CreateAd/VipProvider";
const Resume = () => {
  return (
    <>
      <ResumeProvider>
        <div
          className="d-flex justify-content-between"
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
          <EnProgrressBar />
        </div>
      </ResumeProvider>
    </>
  );
};

export default Resume;
