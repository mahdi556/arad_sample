import { createContext, useEffect, useState } from "react";
import { handleError } from "lib/helper";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const newAxios = axios.create({
    baseURL: "",
  });

  useEffect(() => {
    checkUserLoggedIn();
  }, []);
   const register = async (user) => {
    setStatus("pending");
    newAxios({
      url: "/api/auth/register",
      method: "post",
      data: user,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        setStatus("success");
      })
      .catch(function (error) {
        console.log(error);
        setStatus("error");
      });
  };
  const checkOtp = async (user) => {
    newAxios({
      url: "/api/auth/checkOtp",
      method: "post",
      data: user,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        setUser(response.data.user);
        setStatus("successOtp");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const resendOtp = async () => {
    try {
      const res = await newAxios.post("/api/auth/resendOtp");

      toast.success("کد ورود دوباره برای شما ارسال شد");
    } catch (err) {
      console.log('errr')
      toast.error(handleError(err));
    }
  };

  const signUp = async (user) => {
    newAxios({
      url: "/api/auth/signUp",
      method: "post",
      data: user,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        setUser(response.data.user);
        setStatus("successSignUp");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const login = async (user) => {
    newAxios({
      url: "/api/auth/login",
      method: "post",
      data: user,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        setUser(response.data.user);
        router.push("/office/secretary");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = async () => {
    setError(null);

    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      setUser(null);
      router.push("/auth/login");
    } else {
      setError(handleError(data.message));
    }
  };
  // Check if user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch("/api/auth/me");
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
      router.push({ pathname: "/" });
    }
  };
  const handleSignIn = () => {
    !user && setStatus("login");
    user && user.role.includes("employer")
      ? router.push({
          pathname: "/employer",
        })
      : user && user.role.includes("employee")
      ? router.push({
          pathname: "/employee",
        })
      : null;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        register,
        login,
        logout,
        checkOtp,
        signUp,
        status,
        setStatus,
        handleSignIn,
        resendOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
