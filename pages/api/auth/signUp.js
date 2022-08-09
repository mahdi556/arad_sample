import axios from "axios";

import cookie from "cookie";
export default async function handler(req, res) {
   axios({
    url: "/auth/firstSignUp",
    method: "post",
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.roll,
    },
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
    },
    withCredentials: true,
  })
    .then((response) => {
      console.log(response.data.data.user)
      res.setHeader("Set-Cookie", [
        cookie.serialize("token", response.data.data.user.token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          secure: process.env.NODE_ENV !== "development",
          path: "/",
        }),
      ]);
      res.status(200).json({ user: response.data.data.user });
    })
    .catch(function (error) {
      console.log(error);
    });
}
