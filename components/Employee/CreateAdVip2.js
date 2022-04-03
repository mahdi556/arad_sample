import CreateResumeBody from "./Resume/CreateResumeBody";
import EnProgrressBar from "./Resume/EnProgrressBar";
import RightMenu from "./RightMenu/RightMenu";
import ProgressBar from "./Resume/ProgrressBar";
import ResumeProvider from "../../context/employeeContext/CreateResume/ResumeProvider";
  const CreateEmployerAdVip = () => {
  return (
    <>
      <ResumeProvider>
        <div
          className="d-flex justify-content-between"
          style={{
            width: "100%",
            //   height: "100vh",
            marginTop: 80,
            backgroundColor: "#f2f5f6",
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

export default CreateEmployerAdVip;
