import React from 'react'

function navBar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small"><a href="http://localhost:3030/usuarios/perfil">Admin</a></span>
                        <a href="http://localhost:3030/users/perfil"><img className="img-profile rounded-circle" src="http://localhost:3030/imagenes/users/1673206189416_img.jpg" width="60" alt="avatar" /></a>
                    </a>
                </li>

            </ul>

            </nav>
        </>
    )
}

export default navBar;