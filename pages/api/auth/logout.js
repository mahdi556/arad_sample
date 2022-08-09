import cookie from "cookie";
import axios from "axios";
export default async function handler(req, res) {
  axios({
    url: "/auth/logout",
    method: "post",
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
    },
    withCredentials: true,
  })
    .then((response) => {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          path: "/",
        })
      );
      res.status(200).json({ message: "Success" });
    })
    .catch(function (error) {
      console.log(error);
    });
}
