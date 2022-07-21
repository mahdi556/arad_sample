import cookie from "cookie";
import axios from "axios";
export default async function handler(req, res) {
  axios({
    url: "/loginOffice",
    method: "post",
    data: {
      password: req.body.password,
      cellphone: req.body.cellphone,
    },
    withCredentials: true,
  })
    .then((response) => {
      if (response.data.code === 401) {
      } else {
        res.setHeader("Set-Cookie", [
          cookie.serialize("token", response.data.data.user.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            secure: process.env.NODE_ENV !== "development",
            path: "/",
          }),
          cookie.serialize("role", response.data.data.user.role, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            secure: process.env.NODE_ENV !== "development",
            path: "/",
          }),
        ]);
        res.status(200).json({ user: response.data.data.user });

        //   userContext.dispatch({ type: "role", payload: "office" });
        //   localStorage.setItem("role", JSON.stringify("office"));
        //   router.push({
        //     pathname: "/secretary",
        //     query: { sec_id: response.data.sec_id },
        //   });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
