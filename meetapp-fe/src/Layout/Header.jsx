import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import  LogoutButton from "./LogoutButton.jsx"
import  LoginButton from "./LoginButton.jsx"

const Header = ({ slidebarToggled }) => {
  const { isAuthenticated, user } = useAuth0();
  let name = "persona no registrada";
  let image = "https://res.cloudinary.com/practicaldev/image/fetch/s--MfegQ8F8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.gravatar.com/avatar/00000000000000000000000000000000%3Fd%3Dmp%26f%3Dy%26s%3D128";
  if (user) {
    const { given_name, picture } = user;
    name = given_name;
    image = picture;
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          onClick={slidebarToggled}
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {name}
              </span>
              <img className="img-profile rounded-circle" src={image} alt="foto" />    
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              {isAuthenticated ?( 
                <>
                  <Link className="dropdown-item" to="/perfil">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Mi Perfil
                  </Link>

                  <div className="dropdown-divider" />

                  <LogoutButton
                    className="dropdown-item"
                  />
                </>
                ):(
                  <LoginButton
                    className="dropdown-item"
                  />
                )
              }
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
