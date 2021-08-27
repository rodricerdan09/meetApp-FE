import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Perfil = () => {
  const { user } = useAuth0();
  console.log(JSON.stringify(user));
  const { given_name,family_name, picture, email } = user;
  return (
    <div className="container">
      <h3 className="text-dark text-center mb-4 mt-2">Perfil de {given_name}</h3>

      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow mb-5">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">
                Foto de Perfil
              </p>
            </div>
            <div className="card-body text-center shadow">
              <img
                className="rounded-circle mb-3 mt-4"
                src={picture}
                width={160}
                height={162}
                alt="foto"
              />
              <div className="mb-3">
                <button className="btn btn-primary btn-sm" type="button">
                  Cambiar Foto
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow mb-3">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">
                Datos de Usuario
              </p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="given_name">
                        <strong>Nombre*</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="given_name"
                        placeholder={given_name}
                        name="given_name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="family_name">
                        <strong>Apellido*</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="family_name"
                        placeholder={family_name}
                        name="family_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="last_name">
                        <strong>E-mail*</strong>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder={email}
                        name="mail"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="email">
                        <strong>Teléfono</strong>
                      </label>
                      <input
                        className="form-control"
                        type="phone"
                        placeholder="+54377323232"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-sm" type="submit">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
