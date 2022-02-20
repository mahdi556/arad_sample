import EShowContent from "../components/Employee/EShowCase/EShowContent"
import EShowSideBar from "../components/Employee/EShowCase/EShowSideBar"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const EShowCase =()=>{
    return(
        <>
         <NavBar />
         <div
        className="mx-auto"
        style={{
         
          backgroundColor: "#f2f5f6",
          height:'100%'
        }}
      >
        <div className="d-flex col-12">
          <div className="col-3">
            <EShowSideBar />
          </div>
          <div className="  col-9 ">
           <EShowContent />
             
          </div>
        </div>
      </div>
      <Footer />
        </>
    )
}

export default EShowCase