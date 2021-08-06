import React from "react";

const Perfil = () => {
  return (
    <div className="container">
      <h3 className="text-dark text-center mb-4 mt-2">Perfil Negocio</h3>

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
                src="blob:file:///ff923141-6f3d-4fe7-8930-6f9e0b3f5c95"
                width={160}
                height={160}
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
                      <label htmlFor="username">
                        <strong>Nombre*</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                        placeholder="José"
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="last_name">
                        <strong>Apellido*</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="last_name"
                        placeholder="Gomez"
                        name="last_name"
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
                        placeholder="usuario@ejemplo.com"
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
