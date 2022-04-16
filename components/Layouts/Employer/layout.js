 import RightMenu from "../../Employer/Dashboard/RightMenu/RightMenu";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div
        style={
          {
            // minHeight: 1000,
          }
        }
      >
        <div className="d-flex mt-5  ">
          <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
          `}</style>
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
