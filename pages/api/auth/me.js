import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.cookies.token) {
      res.status(403).json({ message: { err: ["Not Authorized"] } });
      return;
    }
    // console.log(req.cookies.token)
    try {
      axios({
        url: "/me",
        method: "get",
        // withCredentials: true,
        headers: {
          Authorization: `Bearer ${req.cookies.token}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            res.status(200).json({ user: response.data.data.user });
          } else {
            res
              .status(response.status)
              .json({ message: { err: ["User Forbidden"] } });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      res.status(500).json({ message: { err: ["Server Error"] } });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
