import CreateEmployeeAd from "../../Employee/CreateAd";
import RightMenu from "../../Employee/RightMenu/RightMenu";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <div
          className="d-flex mt-5  "
          style={{
            height: "100%",
          }}
        >
          <div
            style={{
              width: "25%",
              // minHeight: 2000,
            }}
          >
            <RightMenu />
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
