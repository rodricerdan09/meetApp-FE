import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({className}) => {
  const { logout } = useAuth0();
  return (
    <button
      className={className}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;