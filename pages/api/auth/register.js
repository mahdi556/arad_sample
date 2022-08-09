import axios from "axios";

import cookie from "cookie";
export default async function handler(req, res) {
  axios({
    url: "/auth/register",
    method: "post",
    data: {
      cellphone: req.body.cellphone,
    },
    withCredentials: true,
  })
    .then((response) => {
      res.setHeader("Set-Cookie", [
        cookie.serialize("login_token", response.data.data.login_token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          secure: process.env.NODE_ENV !== "development",
          path: "/",
        }),
      ]);
      res.status(200).json({ message: "کد برای شما ارسال شد" });
      console.log(response.data.data.login_token);
    })
    .catch(function (error) {
      res.status(500).json({ message: "server Error" });
      console.log("error");
    });
}
