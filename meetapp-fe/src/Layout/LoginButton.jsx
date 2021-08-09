import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({className}) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className={className}
      onClick={() => loginWithRedirect()}
    >
      <i className="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400" />
      Iniciar sesión
    </button>
  );
};

export default LoginButton;