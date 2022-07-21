import cookie from "cookie";
import axios from "axios";
export default async function handler(req, res) {
  console.log(req.body.otp);
  axios({
    url: "/checkotp",
    method: "post",
    data: {
      otp: req.body.otp,
      login_token: req.cookies.login_token,
    },
    withCredentials: true,
  })
    .then((response) => {
      res.setHeader("Set-Cookie", [
        cookie.serialize("login_token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: new Date(0),
          path: "/",
        }),
        cookie.serialize("token", response.data.data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        }),
      ]);
      res.status(200).json({ user: response.data.data.user });
    })
    .catch(function (error) {
      console.log(error);
    });
}
