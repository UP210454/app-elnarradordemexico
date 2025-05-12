import React, { Fragment } from 'react';

const NotFoundPage = () => (
    <Fragment>
         <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Página no encontrada</p>
                <p className="lead">
                    La página que buscas no existe.
                  </p>
                <a href="/home" className="btn btn-primary">Inicio</a>
            </div>
        </div>
    </Fragment>
)

export default NotFoundPage;