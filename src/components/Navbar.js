import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imgLogo from '../assets/noteLogo.png'

const Navbar = () => {
  const location = useLocation();
  const navigate=useNavigate();
  useEffect(() => {
    // console.log(location);
  }, [location]);

  const logout= ()=>{

    localStorage.removeItem('token');
    navigate('/login');
    }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
        <img className="fa-bounce" style={{margin:'-2rem 0'}} height={50} src={imgLogo} alt="..." />
         
          iNotebook
             
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {!localStorage.getItem('token')?
          <div className="btn-group mx-4" role="group" aria-label="Basic example">
            <Link to='/login'  className="btn btn-secondary">
              Login <i className="fa-solid fa-right-to-bracket fa-fade"></i>
            </Link>
            <Link to='/signup'  className="btn btn-light ">
              Sign Up  <i className="fa-solid fa-user-plus fa-fade"></i>
            </Link>
          </div>
          :
          <button  onClick={logout} className="btn btn-secondary m-4">
              Login <i className="fa-solid fa-right-from-bracket fa-fade"></i>
            </button>
              }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
