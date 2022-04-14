import UserContext from "../../context/employeeContext/User/UserContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import Login, { handleSignIn } from "./Login";

const NewAd = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const handleNewAd = () => {
    if (userContext.data.user.auth) {
      router.push({
        pathname: "/adtype",
      });
    } else {
      userContext.dispatch({ type: "signUp", payload: true });
    }
  };

  return (
    <li
      className="px-3 py-1"
      style={{
        backgroundColor: "#EC4B72",
        borderRadius: 10,
        color: "#fff",
      }}
      onClick={() => handleNewAd()}
    >
      <h5
        className="  fs-5 text-center lh-sm py-0 my-0"
        style={{ fontWeight: 700, cursor: "pointer" }}
      >
        آگـــهی بزن
      </h5>
    </li>
  );
};
export default NewAd;
