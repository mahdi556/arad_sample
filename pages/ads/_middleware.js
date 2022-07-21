import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  // const {user} =useContext(AuthContext)
  if (!req.cookies.token) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}
