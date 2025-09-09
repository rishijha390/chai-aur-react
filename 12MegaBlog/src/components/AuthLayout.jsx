import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status); // true/false
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication) {
      if (!authStatus) navigate("/login");
    } else {
      if (authStatus) navigate("/");
    }
  }, [authStatus, navigate, authentication]);

  return <>{children}</>; // Make sure this returns valid JSX
};

export default AuthLayout; // ✅ default export
