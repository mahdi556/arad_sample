import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RegisterPermission from "../../components/Admin/RegisterPermission";
import RegisterRole from "../../components/Admin/RegisterRole";
import AssignRoleToUser from "../../components/Admin/AssignRoleToUser";
import AssignPermissionToRole from "../../components/Admin/AssignPermissionToRole";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();

  return (
    <>
       <div
        className="mx-auto"
        style={{
          backgroundColor: "#f2f5f6",
        }}
      >
        <div className="d-flex col-12 mt-5">
          <div className="  col-8 mt-5 ms-5 ">
            <div className="d-flex">
              <RegisterPermission />
              <RegisterRole />
              <AssignPermissionToRole />
              <AssignRoleToUser />
            </div>
            <div className="d-flex mt-5">
              <button
                className="btn btn-info text-white me-4"
                onClick={() => {
                  router.push({
                    pathname: "/admin/eads",
                  });
                }}
              >
                آگهی های کارجو
              </button>
              <button
                className="btn btn-info text-white"
                onClick={() => {
                  router.push({
                    pathname: "/admin/rads",
                  });
                }}
              >
                آگهی های کارفرما
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Admin;
